# Local Development

## Usage

1. Copy `dev/.env.dist` to `dev/.env`
2. Populate `GF_SECURITY_ADMIN_USER` and `GF_SECURITY_ADMIN_PASSWORD` in `.env`
3. Start the containers using Docker compose:

   ```bash
   docker-compose up -d
   ```

Grafana is accessible at `https://localhost`

Prometheus is accessible at `https://prometheus.localhost`

Enjoy! ✨
