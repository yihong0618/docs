import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    {
      "type": "doc",
      "className": "hidden",
      "id": "index"
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            {
              type: 'doc',
              id: 'getting-started/installation/overview',
              label: 'Overview',
            },
            'getting-started/installation/greptimedb-standalone',
            'getting-started/installation/greptimedb-cluster',
            'getting-started/installation/greptimedb-dashboard',
          ],
        },
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        {
          type: 'doc',
          id: 'user-guide/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Concepts',
          items: [
            {
              type: 'doc',
              id: 'user-guide/concepts/overview',
              label: 'Overview',
            },
            'user-guide/concepts/why-greptimedb',
            'user-guide/concepts/data-model',
            'user-guide/concepts/architecture',
            'user-guide/concepts/storage-location',
            'user-guide/concepts/key-concepts',
            'user-guide/concepts/features-that-you-concern',
          ],
        },
        {
          type: 'category',
          label: 'Ingest Data',
          items: [
            {
              type: 'doc',
              id: 'user-guide/ingest-data/overview',
              label: 'Overview',
            },
            {
              type: 'category',
              label: 'For observability',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/ingest-data/for-observability/overview',
                  label: 'Overview',
                },
                'user-guide/ingest-data/for-observability/prometheus',
                'user-guide/ingest-data/for-observability/vector',
                'user-guide/ingest-data/for-observability/opentelemetry',
                'user-guide/ingest-data/for-observability/influxdb-line-protocol',
                'user-guide/ingest-data/for-observability/kafka',
                'user-guide/ingest-data/for-observability/loki',
                'user-guide/ingest-data/for-observability/otel-collector',
                'user-guide/ingest-data/for-observability/alloy',
                'user-guide/ingest-data/for-observability/elasticsearch',
                'user-guide/ingest-data/for-observability/fluent-bit',
              ],
            },
            {
              type: 'category',
              label: 'For IoT',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/ingest-data/for-iot/overview',
                  label: 'Overview',
                },
                'user-guide/ingest-data/for-iot/sql',
                {
                  type: 'category',
                  label: 'gRPC SDKs',
                  items: [
                    {
                      type: 'doc',
                      id: 'user-guide/ingest-data/for-iot/grpc-sdks/overview',
                      label: 'Overview',
                    },
                    'user-guide/ingest-data/for-iot/grpc-sdks/go',
                    'user-guide/ingest-data/for-iot/grpc-sdks/java',
                  ],
                },
                'user-guide/ingest-data/for-iot/influxdb-line-protocol',
                'user-guide/ingest-data/for-iot/kafka',
                'user-guide/ingest-data/for-iot/emqx',
                'user-guide/ingest-data/for-iot/opentsdb',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Query Data',
          items: [
            {
              type: 'doc',
              id: 'user-guide/query-data/overview',
              label: 'Overview',

            },
            'user-guide/query-data/sql',
            'user-guide/query-data/promql',
            'user-guide/query-data/view',
            'user-guide/query-data/cte',
            'user-guide/query-data/query-external-data',
            'user-guide/query-data/log-query',
            'user-guide/query-data/jaeger',
          ],
        },
        {
          type: 'category',
          label: 'Manage Data',
          items: [
            { type: 'doc', id: 'user-guide/manage-data/overview', label: 'Overview' },
            'user-guide/manage-data/data-index'
          ]
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            {
              type: 'doc',
              id: 'user-guide/integrations/overview',
              label: 'Overview',
            },
            'user-guide/integrations/prometheus',
            'user-guide/integrations/vector',
            'user-guide/integrations/kafka',
            'user-guide/integrations/telegraf',
            'user-guide/integrations/grafana',
            'user-guide/integrations/superset',
            'user-guide/integrations/metabase',
            'user-guide/integrations/emqx',
            'user-guide/integrations/dbeaver',
            'user-guide/integrations/alloy',
            'user-guide/integrations/streamlit',
            'user-guide/integrations/mindsdb',
            'user-guide/integrations/fluent-bit',
          ],
        },
        {
          type: 'category',
          label: 'Protocols',
          items: [
            {
              type: 'doc',
              id: 'user-guide/protocols/overview',
              label: 'Overview',
            },
            'user-guide/protocols/influxdb-line-protocol',
            'user-guide/protocols/opentelemetry',
            'user-guide/protocols/mysql',
            'user-guide/protocols/postgresql',
            'user-guide/protocols/http',
            'user-guide/protocols/grpc',
            'user-guide/protocols/opentsdb',
            'user-guide/protocols/loki',
            'user-guide/protocols/elasticsearch',
          ],
        },
        'user-guide/timezone',
        {
          type: 'category',
          label: 'Migrate to GreptimeDB',
          items: [
            {
              type: 'doc',
              id: 'user-guide/migrate-to-greptimedb/overview',
              label: 'Overview',
            },
            'user-guide/migrate-to-greptimedb/migrate-from-influxdb',
            'user-guide/migrate-to-greptimedb/migrate-from-clickhouse',
            'user-guide/migrate-to-greptimedb/migrate-from-mysql',
            'user-guide/migrate-to-greptimedb/migrate-from-postgresql',
            'user-guide/migrate-to-greptimedb/migrate-from-prometheus',
          ],
        },
        {
          type: 'category',
          label: 'Flow Computation',
          items: [
            {
              type: 'doc',
              id: 'user-guide/flow-computation/overview',
              label: 'Overview',
            },
            'user-guide/flow-computation/continuous-aggregation',
            'user-guide/flow-computation/manage-flow',
            'user-guide/flow-computation/expressions',
          ]
        },
        {
          type: 'category',
          label: 'Logs',
          items: [
            {
              type: 'doc',
              id: 'user-guide/logs/overview',
              label: 'Overview',
            },
            'user-guide/logs/quick-start',
            'user-guide/logs/pipeline-config',
            'user-guide/logs/manage-pipelines',
            'user-guide/logs/write-logs',
            'user-guide/logs/query-logs',
            'user-guide/logs/fulltext-index-config',
          ],
        },
        {
          type: 'category',
          label: 'Traces',
          items: [
            {
              type: 'doc',
              id: 'user-guide/traces/overview',
              label: 'Overview',
            },
            'user-guide/traces/read-write',
            'user-guide/traces/data-model',
            'user-guide/traces/extend-trace',
          ],
        },
        {
          type: 'category',
          label: 'Vector Storage',
          items: [
            'user-guide/vectors/vector-type',
          ],
        },
        {
          type: 'category',
          label: 'Deployments & Administration',
          items: [
            {
              type: 'doc',
              id: 'user-guide/deployments-administration/overview',
              label: 'Overview',
            },
            'user-guide/deployments-administration/architecture',
            {
              type: 'category',
              label: 'Kubernetes',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/deployments-administration/deploy-on-kubernetes/overview',
                  label: 'Overview',
                },
                'user-guide/deployments-administration/deploy-on-kubernetes/deploy-greptimedb-standalone',
                'user-guide/deployments-administration/deploy-on-kubernetes/deploy-greptimedb-cluster',
                'user-guide/deployments-administration/deploy-on-kubernetes/greptimedb-operator-management',
                'user-guide/deployments-administration/deploy-on-kubernetes/common-helm-chart-configurations',
                'user-guide/deployments-administration/deploy-on-kubernetes/configure-frontend-groups',
                'user-guide/deployments-administration/deploy-on-kubernetes/configure-remote-wal',
              ],
            },
            {
              type: 'category',
              label: 'Manage Metadata',
              items: [
                'user-guide/deployments-administration/manage-metadata/overview',
                'user-guide/deployments-administration/manage-metadata/configuration',
                'user-guide/deployments-administration/manage-metadata/restore-backup',
                'user-guide/deployments-administration/manage-metadata/manage-etcd',
              ],
            },

            {
              type: 'category',
              label: 'Write-Ahead Logging (WAL)',
              items: [
                'user-guide/deployments-administration/wal/overview',
                'user-guide/deployments-administration/wal/local-wal',
                {
                  type: 'category',
                  label: 'Remote WAL',
                  items: [
                    'user-guide/deployments-administration/wal/remote-wal/configuration',
                    'user-guide/deployments-administration/wal/remote-wal/manage-kafka',
                  ]
                },
              ],
            },
            'user-guide/deployments-administration/configuration',
            {
              type: 'category',
              label: 'Authentication',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/deployments-administration/authentication/overview',
                  label: 'Overview',
                },
                'user-guide/deployments-administration/authentication/static',
              ],
            },
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/deployments-administration/monitoring/overview',
                  label: 'Overview',
                },
                'user-guide/deployments-administration/monitoring/cluster-monitoring-deployment',
                'user-guide/deployments-administration/monitoring/export-metrics',
                'user-guide/deployments-administration/monitoring/tracing',
                'user-guide/deployments-administration/monitoring/slow-query',
                'user-guide/deployments-administration/monitoring/runtime-info',
              ],
            },
            'user-guide/deployments-administration/capacity-plan',
            {
              type: 'category',
              label: 'Manage Data',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/deployments-administration/manage-data/overview',
                  label: 'Overview',
                },
                'user-guide/deployments-administration/manage-data/basic-table-operations',
                'user-guide/deployments-administration/manage-data/table-sharding',
                'user-guide/deployments-administration/manage-data/region-migration',
                'user-guide/deployments-administration/manage-data/region-failover',
                'user-guide/deployments-administration/manage-data/compaction',
              ],
            },
            {
              type: 'category',
              label: 'Performance Tuning',
              items: [
                'user-guide/deployments-administration/performance-tuning/performance-tuning-tips',
                'user-guide/deployments-administration/performance-tuning/design-table',
              ]
            },
            {
              type: 'category',
              label: 'Disaster Recovery',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/deployments-administration/disaster-recovery/overview',
                  label: 'Overview',
                },
                'user-guide/deployments-administration/disaster-recovery/back-up-&-restore-data',
                'user-guide/deployments-administration/disaster-recovery/back-up-&-restore-meta-data',
                'user-guide/deployments-administration/disaster-recovery/dr-solution-based-on-cross-region-deployment-in-single-cluster',
              ],
            },
            {
              type: 'category',
              label: 'Maintenance',
              items: [
                'user-guide/deployments-administration/maintenance/maintenance-mode',
                'user-guide/deployments-administration/maintenance/prevent-metadata-changes',
              ]
            },
            'user-guide/deployments-administration/run-on-android',
            'user-guide/deployments-administration/upgrade',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GreptimeCloud',
      items: [
        {
          type: 'doc',
          id: 'greptimecloud/overview',
          label: 'Overview',

        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            {
              type: 'doc',
              id: 'greptimecloud/getting-started/overview',
              label: 'Overview',
            },
            'greptimecloud/getting-started/prometheus',
            'greptimecloud/getting-started/mysql',
            'greptimecloud/getting-started/influxdb',
            'greptimecloud/getting-started/go',
            'greptimecloud/getting-started/java',
            'greptimecloud/getting-started/python',
            'greptimecloud/getting-started/node',
            'greptimecloud/getting-started/vector',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'greptimecloud/integrations/prometheus',
            'greptimecloud/integrations/grafana',
            'greptimecloud/integrations/mysql',
            'greptimecloud/integrations/postgresql',
            'greptimecloud/integrations/influxdb',
            'greptimecloud/integrations/kafka',
            'greptimecloud/integrations/otlp',
            'greptimecloud/integrations/vector',
            'greptimecloud/integrations/alloy',
            'greptimecloud/integrations/emqx',
            'greptimecloud/integrations/streamlit',
            'greptimecloud/integrations/superset',
            'greptimecloud/integrations/metabase',
            'greptimecloud/integrations/mindsdb',
            'greptimecloud/integrations/dbeaver',
            'greptimecloud/integrations/fluent-bit',
            {
              type: 'category',
              label: 'SDK Libraries',
              items: ['greptimecloud/integrations/sdk-libraries/go', 'greptimecloud/integrations/sdk-libraries/java'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Migrate to GreptimeCloud',
          items: [
            'greptimecloud/migrate-to-greptimecloud/migrate-from-influxdb',
            'greptimecloud/migrate-to-greptimecloud/migrate-from-prometheus',
          ]
        },
        {
          type: 'category',
          label: 'Usage & Billing',
          items: [
            {
              type: 'doc',
              id: 'greptimecloud/usage-&-billing/overview',
              label: 'Overview',
            },
            'greptimecloud/usage-&-billing/request-capacity-unit',
            'greptimecloud/usage-&-billing/hobby',
            'greptimecloud/usage-&-billing/serverless',
            'greptimecloud/usage-&-billing/dedicated',
            'greptimecloud/usage-&-billing/billing',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            {
              type: 'category',
              label: 'Monitor Host Metrics',
              items: [
                'greptimecloud/tutorials/monitor-host-metrics/prometheus',
                'greptimecloud/tutorials/monitor-host-metrics/mysql',
                'greptimecloud/tutorials/monitor-host-metrics/influxdb',
                'greptimecloud/tutorials/monitor-host-metrics/go',
                'greptimecloud/tutorials/monitor-host-metrics/java',
                'greptimecloud/tutorials/monitor-host-metrics/python',
                'greptimecloud/tutorials/monitor-host-metrics/node-js',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GreptimeDB Enterprise',
      items: [
        {
          type: 'doc',
          id: 'enterprise/overview',
          label: 'Overview',

        },
        {
          type: 'category',
          label: 'Deployments & Administration',
          items: [
            {
              type: 'category',
              label: 'Kubernetes',
              items: [
                {
                  type: 'doc',
                  id: 'enterprise/deployments-administration/deploy-on-kubernetes/overview',
                  label: 'Overview',
                },
                'enterprise/deployments-administration/deploy-on-kubernetes/installation',
                'enterprise/deployments-administration/deploy-on-kubernetes/upgrade',
              ]
            },
            'enterprise/deployments-administration/authentication',
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                {
                  type: 'doc',
                  id: 'enterprise/deployments-administration/monitoring/overview',
                  label: 'Overview',
                },
                'enterprise/deployments-administration/monitoring/check-db-status',
                'enterprise/deployments-administration/monitoring/key-metrics',
                'enterprise/deployments-administration/monitoring/key-logs',
                'enterprise/deployments-administration/monitoring/audit-logging',
              ]
            },
            {
              type: 'category',
              label: 'Disaster Recovery',
              items: [
                {
                  type: 'doc',
                  id: 'enterprise/deployments-administration/disaster-recovery/overview',
                  label: 'Overview',
                },
                'enterprise/deployments-administration/disaster-recovery/dr-solution-based-on-active-active-failover',
              ]
            },
            'enterprise/deployments-administration/backup',
            'enterprise/deployments-administration/performance-tuning',
            'enterprise/deployments-administration/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Autopilot',
          items: ['enterprise/autopilot/region-balancer'],
        },
        {
          type: 'category',
          label: 'Releases',
          items: [
            'enterprise/release-notes/release-25_05',
            'enterprise/release-notes/release-24_11',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        {
          type: 'category',
          label: 'GreptimeDB Command Line Interface',
          items: [
            'reference/command-lines/overview',
            'reference/command-lines/metasrv',
            'reference/command-lines/datanode',
            'reference/command-lines/flownode',
            'reference/command-lines/frontend',
            'reference/command-lines/standalone',
            {
              type: 'category',
              label: 'Utilities',
              items: [
                'reference/command-lines/utilities/data',
                'reference/command-lines/utilities/metadata',
                'reference/command-lines/utilities/metadata-interaction',
                'reference/command-lines/utilities/repair-logical-tables',
              ],
            },
          ],
        },
        'reference/sql-tools',
        'reference/time-durations',
        'reference/about-greptimedb-engines',
        {
          type: 'category',
          label: 'SQL',
          items: [
            {
              type: 'doc',
              id: 'reference/sql/overview',
              label: 'Overview',
            },
            'reference/sql/data-types',
            'reference/sql/alter',
            'reference/sql/case',
            'reference/sql/cast',
            'reference/sql/copy',
            'reference/sql/create',
            'reference/sql/delete',
            'reference/sql/describe_table',
            'reference/sql/distinct',
            'reference/sql/drop',
            'reference/sql/explain',
            'reference/sql/group_by',
            'reference/sql/having',
            'reference/sql/insert',
            'reference/sql/join',
            'reference/sql/limit',
            'reference/sql/offset',
            'reference/sql/order_by',
            'reference/sql/range',
            'reference/sql/replace',
            'reference/sql/select',
            'reference/sql/show',
            'reference/sql/tql',
            'reference/sql/truncate',
            'reference/sql/where',
            'reference/sql/with',
            {
              type: 'category',
              label: 'Functions',
              items: [
                {
                  type: 'doc',
                  id: 'reference/sql/functions/overview',
                  label: 'Overview',
                },
                'reference/sql/functions/df-functions',
                'reference/sql/functions/geo',
                'reference/sql/functions/ip',
                'reference/sql/functions/json',
                'reference/sql/functions/vector',
                'reference/sql/functions/approximate',
              ]
            },
            'reference/sql/admin',
            'reference/sql/compatibility',
            {
              type: 'category',
              label: 'Greptime Private',
              items: [
                {
                  type: 'doc',
                  id: 'reference/sql/greptime-private/overview',
                  label: 'Overview',
                },
                'reference/sql/greptime-private/slow_queries',
                'reference/sql/greptime-private/pipelines',
              ],
            },
            {
              type: 'category',
              label: 'Information Schema',
              items: [
                {
                  type: 'doc',
                  id: 'reference/sql/information-schema/overview',
                  label: 'Overview',
                },
                'reference/sql/information-schema/build-info',
                'reference/sql/information-schema/character-sets',
                'reference/sql/information-schema/collations',
                'reference/sql/information-schema/collation-character-set-applicability',
                'reference/sql/information-schema/columns',
                'reference/sql/information-schema/engines',
                'reference/sql/information-schema/key-column-usage',
                'reference/sql/information-schema/partitions',
                'reference/sql/information-schema/procedure-info',
                'reference/sql/information-schema/schemata',
                'reference/sql/information-schema/tables',
                'reference/sql/information-schema/table-constraints',
                'reference/sql/information-schema/views',
                'reference/sql/information-schema/flows',
                'reference/sql/information-schema/region-peers',
                'reference/sql/information-schema/region-statistics',
                'reference/sql/information-schema/runtime-metrics',
                'reference/sql/information-schema/cluster-info',
                'reference/sql/information-schema/process-list',
              ],
            },
          ],
        },
        'reference/http-endpoints',
        'reference/telemetry',
        'reference/gtctl',
      ],
    },
    {
      type: 'category',
      label: 'Contributor Guide',
      items: [
        {
          type: 'doc',
          id: 'contributor-guide/overview',
          label: 'Overview',

        },
        'contributor-guide/getting-started',
        {
          type: 'category',
          label: 'Frontend',
          items: [
            {
              type: 'doc',
              id: 'contributor-guide/frontend/overview',
              label: 'Overview',
            },
            'contributor-guide/frontend/table-sharding',
            'contributor-guide/frontend/distributed-querying',
          ],
        },
        {
          type: 'category',
          label: 'Datanode',
          items: [
            {
              type: 'doc',
              id: 'contributor-guide/datanode/overview',
              label: 'Overview',
            },
            'contributor-guide/datanode/storage-engine',
            'contributor-guide/datanode/query-engine',
            'contributor-guide/datanode/data-persistence-indexing',
            'contributor-guide/datanode/wal',
            'contributor-guide/datanode/metric-engine',
          ],
        },
        {
          type: 'category',
          label: 'Metasrv',
          items: [
            {
              type: 'doc',
              id: 'contributor-guide/metasrv/overview',
              label: 'Overview',
            },
            'contributor-guide/metasrv/admin-api',
            'contributor-guide/metasrv/selector',
          ],
        },
        {
          type: 'category',
          label: 'Flownode',
          items: [
            {
              type: 'doc',
              id: 'contributor-guide/flownode/overview',
              label: 'Overview',
            },
            'contributor-guide/flownode/dataflow',
            'contributor-guide/flownode/arrangement'
          ],
        },
        {
          type: 'category',
          label: 'Tests',
          items: [
            {
              type: 'doc',
              id: 'contributor-guide/tests/overview',
              label: 'Overview',
            },
            'contributor-guide/tests/unit-test',
            'contributor-guide/tests/integration-test',
            'contributor-guide/tests/sqlness-test',
          ],
        },
        {
          type: 'category',
          label: 'How To',
          items: [
            'contributor-guide/how-to/how-to-write-sdk',
            'contributor-guide/how-to/how-to-use-tokio-console',
            'contributor-guide/how-to/how-to-trace-greptimedb',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'reference/about-greptimedb-version',
        {
          "type": "link",
          "label": "Releases",
          "href": "/release-notes"
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ and Others',
      items: [
        {
          type: 'doc',
          id: 'faq-and-others/overview',
          label: 'Overview',
        },
        'faq-and-others/faq'
      ]
    },
  ],
}

export default sidebars
