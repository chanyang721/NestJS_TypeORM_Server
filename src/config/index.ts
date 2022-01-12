import dotenv from 'dotenv';
dotenv.config();

export default {
  api: {
    prefix: '/api',
  },

  jwt: {
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    secret: process.env.SECRET || 'nest_test',
    expire: {
      access: process.env.JWT_ACCESS_TOKEN,
      refresh: process.env.JWT_REFRESH_TOKEN,
    },
  },

  database: {
    mysql: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3306,
      username: process.env.USERNAME || 'root',
      password: process.env.PASSWORD || '1q2w',
      database: process.env.DATABASE || 'nest_test',
      entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
      migrations: ['src/database/migration/**/*.ts'],
      subscribers: ['src/database/subscriber/**/*.ts'],
    },

    AWS_RDS: {
      host: process.env.RDS_HOST,
      port: process.env.RDS_PORT,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DATABASE,
      entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
      migrations: ['src/database/migration/**/*.ts'],
      subscribers: ['src/database/subscriber/**/*.ts'],
    },
  },

  s3: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.S3_REGION,
  },

  multerS3: {
    bucket: process.env.BUCKET,
    acl: process.env.ACL,
  },

  AWS_SES: {
    region: 'ap-northeast-2',
    apiVersion: '2010-12-01',
    maxRetries: 2,
  },
};
