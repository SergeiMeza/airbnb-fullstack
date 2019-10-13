echo "========================================================="
echo "⏰ auto generating code from graphql schema"

apollo codegen:generate --includes="./src/**/*.tsx" --localSchemaFile=./schema.json --target="typescript" --outputFlat ./src/schemaTypes.ts

echo "🚀 done"
echo "========================================================="