import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const {
  R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, R2_PUBLIC_BASE,
} = process.env

export const r2Configured = Boolean(
  R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY && R2_BUCKET && R2_PUBLIC_BASE,
)

const s3 = r2Configured
  ? new S3Client({
      region: 'auto',
      endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: { accessKeyId: R2_ACCESS_KEY_ID!, secretAccessKey: R2_SECRET_ACCESS_KEY! },
    })
  : null

/** Uploads to R2 and returns a public URL; falls back to writing ./out for local previews. */
export async function put(key: string, body: Buffer): Promise<string> {
  if (!s3) {
    const path = join(process.cwd(), 'posts', key)
    mkdirSync(join(path, '..'), { recursive: true })
    writeFileSync(path, body)
    return `file://${path}`
  }
  await s3.send(new PutObjectCommand({
    Bucket: R2_BUCKET!, Key: key, Body: body, ContentType: 'image/png',
    CacheControl: 'public, max-age=31536000, immutable',
  }))
  return `${R2_PUBLIC_BASE!.replace(/\/$/, '')}/${key}`
}
