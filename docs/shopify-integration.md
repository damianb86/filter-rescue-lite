# Shopify integration

## Confirmado con Shopify Dev MCP
- React Router apps usan `@shopify/shopify-app-react-router`, `authenticate.admin`, App Bridge y rutas `app.*`.
- App Home recomienda Polaris web components para UI dentro del iframe de Shopify Admin.
- Delivery Customization Function puede ocultar/renombrar/ordenar delivery options.
- Cart and Checkout Validation usa validations y `write_validations` cuando aplica.
- TranslatableResource requiere `read_translations`; `translationsRegister` requiere `write_translations`.
- `publishablePublish` requiere `write_publications` para publicaciones futuras.

## Integraciones de Filter Rescue Lite
- Admin product and collection reads for option/tag availability modeling.
- Theme app extension later alters filter UI and zero-result messaging.
- Search & Discovery behavior remains native; app only layers preview/rescue UX.

## Scopes
- Required: read_products
- Explicitly not requested: write_products, read_orders, read_customers

## Webhooks
- app/uninstalled
- app/scopes_update

## Credenciales faltantes
- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_APP_URL`
- `DATABASE_URL`

## No validado todavia
- Config remota de Partner Dashboard.
- Instalacion real en dev store.
- API calls reales contra Admin GraphQL.
