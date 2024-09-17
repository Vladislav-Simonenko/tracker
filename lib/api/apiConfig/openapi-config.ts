import type { ConfigFile } from "@rtk-query/codegen-openapi";

// const schemaPath = String(process.env.NEXT_PUBLIC_SCHEMA_FILE);

const config: ConfigFile = {
  schemaFile: "http://localhost:3000/api-json",
  apiFile: "../emptyApi.ts",
  outputFile: "../configuredApi/dndApi.ts",
  apiImport: "trackerSprilApi",
  exportName: "DnDApi",
  hooks: true,
};

export default config;
