// Integration name to icon filename mapping
const iconMap = {
  // Big Data & NoSQL
  "Amazon Athena": "icon-athena.png",
  "Amazon DynamoDB": "icon-dynamodb.png",
  "Azure Data Catalog": "icon-azuredatacatalog.png",
  "Azure Table": "icon-azure.png",
  "BigQuery": "icon-bigquery.png",
  "Cassandra": "icon-cassandra.png",
  "Cloudant": "icon-cloudant.png",
  "CockroachDB": "icon-cockroachdb.png",
  "Cosmos DB": "icon-cosmosdb.png",
  "Couchbase": "icon-couchbase.png",
  "CouchDB": "icon-couchdb.png",
  "Databricks": "icon-databricks.png",
  "Elasticsearch": "icon-elasticsearch.png",
  "Google Data Catalog": "icon-googledatacatalog.png",
  "Google Spanner": "icon-googlespanner.png",
  "GraphQL": "icon-graphql.png",
  "HarperDB": "icon-harperdb.png",
  "HBase": "icon-hbase.png",
  "Hive": "icon-hive.png",
  "Kafka": "icon-kafka.png",
  "MarkLogic": "icon-marklogic.png",
  "MongoDB": "icon-mongodb.png",
  "Neo4j": "icon-neo4j.png",
  "Phoenix": "icon-phoenix.png",
  "Presto": "icon-presto.png",
  "Redis": "icon-redis.png",
  "Redshift": "icon-redshift.png",
  "Snowflake": "icon-snowflake.png",
  "Spark": "icon-spark.png",
  "TigerGraph": "icon-tigergraph.png",
  "Trino": "icon-trino.png",

  // Marketing
  "Adobe Analytics": "icon-adobeanalytics.png",
  "Adobe Target": "icon-adobetarget.png",
  "Bing Ads": "icon-bingads.png",
  "Cvent": "icon-cvent.png",
  "Facebook": "icon-facebook.png",
  "Facebook Ads": "icon-facebookads.png",
  "Google Ad Manager": "icon-dfp.png",
  "Google Ads": "icon-adwords.png",
  "Google Analytics": "icon-ganalytics.png",
  "Google Campaign Manager 360": "icon-doubleclick.png",
  "HubSpot": "icon-hubspot.png",
  "Instagram": "icon-instagram.png",
  "Klaviyo": "icon-klaviyo.png",
  "LinkedIn": "icon-linkedin.png",
  "LinkedIn Ads": "icon-linkedinads.png",
  "Mailchimp": "icon-mailchimp.png",
  "Marketo": "icon-marketo.png",
  "Oracle Eloqua": "icon-eloqua.png",
  "Oracle Eloqua Reporting": "icon-eloquareporting.png",
  "Oracle Sales": "icon-oraclesalescloud.png",
  "Pinterest": "icon-pinterest.png",
  "Salesforce Marketing": "icon-salesforcemarketing.png",
  "Salesforce Marketing Cloud Account Engagement": "icon-salesforcemcae.png",
  "Salesforce Pardot": "icon-pardot.png",
  "Salesloft": "icon-salesloft.png",
  "SendGrid": "icon-sendgrid.png",
  "Snapchat Ads": "icon-snapchatads.png",
  "Splunk": "icon-splunk.png",
  "SurveyMonkey": "icon-surveymonkey.png",
  "Tableau CRM Analytics": "icon-tableaucrm.png",
  "Twitter": "icon-twitter.png",
  "Twitter Ads": "icon-twitterads.png",
  "YouTube Analytics": "icon-youtubeanalytics.png",

  // Collaboration
  "Active Directory": "icon-activedirectory.png",
  "Airtable": "icon-airtable.png",
  "Asana": "icon-asana.png",
  "Azure Active Directory": "icon-azuread.png",
  "Azure DevOps": "icon-azuredevops.png",
  "Basecamp": "icon-basecamp.png",
  "Bitbucket": "icon-bitbucket.png",
  "Confluence": "icon-confluence.png",
  "DocuSign": "icon-docusign.png",
  "Email": "icon-email.png",
  "Excel": "icon-excel.png",
  "Excel Online": "icon-excelonline.png",
  "GitHub": "icon-github.png",
  "Gmail": "icon-gmail.png",
  "Google Calendar": "icon-googlecalendar.png",
  "Google Contacts": "icon-googlecontacts.png",
  "Google Sheets": "icon-googlesheets.png",
  "Greenhouse": "icon-greenhouse.png",
  "HCL Domino": "icon-hcldomino.png",
  "Jira": "icon-jira.png",
  "Jira Assets": "icon-jiraassets.png",
  "Jira Service Management": "icon-jiraservicedesk.png",
  "Kintone": "icon-kintone.png",
  "Microsoft Entra ID": "icon-microsoftentraid.png",
  "Microsoft Exchange": "icon-exchange.png",
  "Microsoft Planner": "icon-msplanner.png",
  "Microsoft Project": "icon-msproject.png",
  "Microsoft Teams": "icon-msteams.png",
  "Monday.com": "icon-monday.png",
  "Office 365": "icon-office365.png",
  "Okta": "icon-okta.png",
  "OneNote": "icon-onenote.png",
  "Oracle Service Cloud": "icon-oracleservicecloud.png",
  "PingOne": "icon-pingone.png",
  "Quickbase": "icon-quickbase.png",
  "Raiser's Edge NXT": "icon-raisersedgenxt.png",
  "Salesforce Data Cloud": "icon-salesforcedc.png",
  "SAP BusinessObjects BI": "icon-sapbusinessobjectsbi.png",
  "SAP SuccessFactors": "icon-sapsuccessfactors.png",
  "SharePoint": "icon-sharepoint.png",
  "SharePoint Excel Services": "icon-excelservices.png",
  "Slack": "icon-slack.png",
  "Smartsheet": "icon-smartsheet.png",
  "Trello": "icon-trello.png",
  "WordPress": "icon-wordpress.png",
  "Zendesk": "icon-zendesk.png",
  "Zoho Creator": "icon-zohocreator.png",
  "Zoho Projects": "icon-zohoprojects.png",

  // CRM & ERP
  "Act CRM": "icon-actcrm.png",
  "Act-On": "icon-acton.png",
  "ActiveCampaign": "icon-activecampaign.png",
  "Acumatica": "icon-acumatica.png",
  "Bullhorn CRM": "icon-bullhorncrm.png",
  "Certinia": "icon-certinia.png",
  "Dynamics 365": "icon-dynamics365.png",
  "Dynamics 365 Business Central": "icon-d365businesscentral.png",
  "Dynamics CRM": "icon-dynamicscrm.png",
  "Epicor Kinetic": "icon-epicorkinetic.png",
  "Exact Online": "icon-exact.png",
  "Highrise": "icon-highrise.png",
  "HubDB": "icon-hubdb.png",
  "nCino": "icon-ncino.png",
  "NetSuite": "icon-netsuite.png",
  "Odoo": "icon-odoo.png",
  "Oracle Financials Cloud": "icon-oracleerp.png",
  "Oracle HCM Cloud": "icon-oraclehcm.png",
  "Oracle SCM": "icon-oraclescm.png",
  "Outreach": "icon-outreach.png",
  "Pipedrive": "icon-pipedrive.png",
  "Sage 300": "icon-sage300.png",
  "Salesforce": "icon-salesforce.png",
  "Salesforce Financial Service Cloud": "icon-salesforcefsc.png",
  "SAP": "icon-sap.png",
  "SAP Ariba Source": "icon-saparibasource.png",
  "SAP ByDesign": "icon-sapbydesign.png",
  "SAP NetWeaver Gateway": "icon-sapgateway.png",
  "ServiceNow": "icon-servicenow.png",
  "SugarCRM": "icon-sugarcrm.png",
  "SuiteCRM": "icon-suitecrm.png",
  "Tally": "icon-tally.png",
  "Tier1": "icon-tier1.png",
  "Vault CRM": "icon-veeva.png",
  "Veeva CRM": "icon-veevacrm.png",
  "Workday": "icon-workday.png",
  "Zoho CRM": "icon-zohocrm.png",
  "Zoho Inventory": "icon-zohoinventory.png",

  // File & API
  "Amazon S3": "icon-amazons3.png",
  "Avro": "icon-avro.png",
  "Azure Data Lake Storage": "icon-azuredatalake.png",
  "Box": "icon-box.png",
  "CSV": "icon-csv.png",
  "Dropbox": "icon-dropbox.png",
  "FHIR": "icon-fhir.png",
  "FTP": "icon-ftp.png",
  "Google Cloud Storage": "icon-googlecloudstorage.png",
  "Google Drive": "icon-googledrive.png",
  "HDFS": "icon-hdfs.png",
  "IBM Cloud Object Storage": "icon-ibmcloudobjectstorage.png",
  "JSON": "icon-json.png",
  "LDAP": "icon-ldap.png",
  "Microsoft Dataverse": "icon-dataverse.png",
  "Microsoft OneDrive": "icon-onedrive.png",
  "OData": "icon-odata.png",
  "Parquet": "icon-parquet.png",
  "Power BI XMLA": "icon-powerbixmla.png",
  "REST": "icon-rest.png",
  "RSS": "icon-rss.png",
  "SAS Data Sets": "icon-sasdatasets.png",
  "SAS XPT": "icon-sasxpt.png",
  "SFTP": "icon-sftp.png",
  "Twilio": "icon-twilio.png",
  "XML": "icon-xml.png",

  // Accounting
  "Avalara AvaTax": "icon-avalara.png",
  "Dynamics NAV": "icon-dynamicsnav.png",
  "Freshdesk": "icon-freshdesk.png",
  "MYOB AccountRight": "icon-myobaccountright.png",
  "QuickBooks": "icon-quickbooks.png",
  "QuickBooks Online": "icon-qbonline.png",
  "QuickBooks Time": "icon-tsheets.png",
  "Reckon": "icon-reckon.png",
  "Reckon Accounts Hosted": "icon-reckonaccountshosted.png",
  "Sage 200": "icon-sage200.png",
  "Sage Cloud Accounting": "icon-sagecloudaccounting.png",
  "Sage Intacct": "icon-intacct.png",
  "TaxJar": "icon-taxjar.png",
  "Xero": "icon-xero.png",
  "Zoho Books": "icon-zohobooks.png",

  // E-Commerce
  "Adobe Commerce": "icon-adobecommerce.png",
  "ADP": "icon-adp.png",
  "Amazon Marketplace": "icon-amazonmarketplace.png",
  "Authorize.Net": "icon-authorizedotnet.png",
  "BigCommerce": "icon-bigcommerce.png",
  "Blackbaud FE NXT": "icon-blackbaudfenxt.png",
  "eBay": "icon-ebay.png",
  "eBay Analytics": "icon-ebayanalytics.png",
  "Paylocity": "icon-paylocity.png",
  "PayPal": "icon-paypal.png",
  "SAP Ariba Procurement": "icon-saparibaprocurement.png",
  "SAP Fieldglass": "icon-sapfieldglass.png",
  "ShipStation": "icon-shipstation.png",
  "Shopify": "icon-shopify.png",
  "Square": "icon-square.png",
  "Stripe": "icon-stripe.png",
  "Wave Financial": "icon-wavefinancial.png",
  "WooCommerce": "icon-woocommerce.png",
  "Zuora": "icon-zuora.png",

  // RDBMS
  "Access": "icon-access.png",
  "AlloyDB": "icon-alloydb.png",
  "Apache Doris": "icon-apachedoris.png",
  "Azure Analysis Services": "icon-azureanalysisservices.png",
  "Azure Synapse": "icon-azuresynapse.png",
  "DB2": "icon-db2.png",
  "EnterpriseDB": "icon-enterprisedb.png",
  "Greenplum": "icon-greenplum.png",
  "IBM Informix": "icon-ibminformix.png",
  "Impala": "icon-impala.png",
  "JDBC-ODBC Bridge": "icon-bridge.png",
  "Lakebase": "icon-lakebase.png",
  "MariaDB": "icon-mariadb.png",
  "MySQL": "icon-mysql.png",
  "Oracle": "icon-oracledb.png",
  "PostgreSQL": "icon-postgresql.png",
  "SAP Business One": "icon-sapbusinessone.png",
  "SAP HANA": "icon-saphana.png",
  "SAP HANA XS Advanced": "icon-saphanaxsa.png",
  "SAP Hybris C4C": "icon-saphybris.png",
  "SingleStore": "icon-singlestore.png",
  "SQL Analysis Services": "icon-ssas.png",
  "SQL Server": "icon-sql.png",
  "SQLite": "icon-sqlite.png",
  "Sybase": "icon-sybase.png",
  "Sybase IQ": "icon-sybaseiq.png",
  "Teradata": "icon-teradata.png",
  "xBase": "icon-xbase.png",
}

export const integrationCategories = {
  "Big Data & NoSQL": [
    "Amazon Athena", "Amazon DynamoDB", "Azure Data Catalog", "Azure Table",
    "BigQuery", "Cassandra", "Cloudant", "CockroachDB", "Cosmos DB",
    "Couchbase", "CouchDB", "Databricks", "Elasticsearch", "Google Data Catalog",
    "Google Spanner", "GraphQL", "HarperDB", "HBase", "Hive", "Kafka",
    "MarkLogic", "MongoDB", "Neo4j", "Phoenix", "Presto", "Redis",
    "Redshift", "Snowflake", "Spark", "TigerGraph", "Trino"
  ],
  "Marketing": [
    "Adobe Analytics", "Adobe Target", "Bing Ads", "Cvent", "Facebook",
    "Facebook Ads", "Google Ad Manager", "Google Ads", "Google Analytics",
    "Google Campaign Manager 360", "HubSpot", "Instagram", "Klaviyo",
    "LinkedIn", "LinkedIn Ads", "Mailchimp", "Marketo", "Oracle Eloqua",
    "Oracle Eloqua Reporting", "Oracle Sales", "Pinterest",
    "Salesforce Marketing", "Salesforce Marketing Cloud Account Engagement",
    "Salesforce Pardot", "Salesloft", "SendGrid", "Snapchat Ads", "Splunk",
    "SurveyMonkey", "Tableau CRM Analytics", "Twitter", "Twitter Ads",
    "YouTube Analytics"
  ],
  "Collaboration": [
    "Active Directory", "Airtable", "Asana", "Azure Active Directory",
    "Azure DevOps", "Basecamp", "Bitbucket", "Confluence", "DocuSign",
    "Email", "Excel", "Excel Online", "GitHub", "Gmail", "Google Calendar",
    "Google Contacts", "Google Sheets", "Greenhouse", "HCL Domino", "Jira",
    "Jira Assets", "Jira Service Management", "Kintone", "Microsoft Entra ID",
    "Microsoft Exchange", "Microsoft Planner", "Microsoft Project",
    "Microsoft Teams", "Monday.com", "Office 365", "Okta", "OneNote",
    "Oracle Service Cloud", "PingOne", "Quickbase", "Raiser's Edge NXT",
    "Salesforce Data Cloud", "SAP BusinessObjects BI", "SAP SuccessFactors",
    "SharePoint", "SharePoint Excel Services", "Slack", "Smartsheet",
    "Trello", "WordPress", "Zendesk", "Zoho Creator", "Zoho Projects"
  ],
  "CRM & ERP": [
    "Act CRM", "Act-On", "ActiveCampaign", "Acumatica", "Bullhorn CRM",
    "Certinia", "Dynamics 365", "Dynamics 365 Business Central", "Dynamics CRM",
    "Epicor Kinetic", "Exact Online", "Highrise", "HubDB", "nCino",
    "NetSuite", "Odoo", "Oracle Financials Cloud", "Oracle HCM Cloud",
    "Oracle SCM", "Outreach", "Pipedrive", "Sage 300", "Salesforce",
    "Salesforce Financial Service Cloud", "SAP", "SAP Ariba Source",
    "SAP ByDesign", "SAP NetWeaver Gateway", "ServiceNow", "SugarCRM",
    "SuiteCRM", "Tally", "Tier1", "Vault CRM", "Veeva CRM", "Workday",
    "Zoho CRM", "Zoho Inventory"
  ],
  "File & API": [
    "Amazon S3", "Avro", "Azure Data Lake Storage", "Box", "CSV",
    "Dropbox", "FHIR", "FTP", "Google Cloud Storage", "Google Drive",
    "HDFS", "IBM Cloud Object Storage", "JSON", "LDAP", "Microsoft Dataverse",
    "Microsoft OneDrive", "OData", "Parquet", "Power BI XMLA", "REST",
    "RSS", "SAS Data Sets", "SAS XPT", "SFTP", "Twilio", "XML"
  ],
  "Accounting": [
    "Avalara AvaTax", "Dynamics NAV", "Freshdesk", "MYOB AccountRight",
    "QuickBooks", "QuickBooks Online", "QuickBooks Time", "Reckon",
    "Reckon Accounts Hosted", "Sage 200", "Sage Cloud Accounting",
    "Sage Intacct", "TaxJar", "Xero", "Zoho Books"
  ],
  "E-Commerce": [
    "Adobe Commerce", "ADP", "Amazon Marketplace", "Authorize.Net",
    "BigCommerce", "Blackbaud FE NXT", "eBay", "eBay Analytics",
    "Paylocity", "PayPal", "SAP Ariba Procurement", "SAP Fieldglass",
    "ShipStation", "Shopify", "Square", "Stripe", "Wave Financial",
    "WooCommerce", "Zuora"
  ],
  "RDBMS": [
    "Access", "AlloyDB", "Apache Doris", "Azure Analysis Services",
    "Azure Synapse", "DB2", "EnterpriseDB", "Greenplum", "IBM Informix",
    "Impala", "JDBC-ODBC Bridge", "Lakebase", "MariaDB", "MySQL",
    "Oracle", "PostgreSQL", "SAP Business One", "SAP HANA",
    "SAP HANA XS Advanced", "SAP Hybris C4C", "SingleStore",
    "SQL Analysis Services", "SQL Server", "SQLite", "Sybase",
    "Sybase IQ", "Teradata", "xBase"
  ]
}

export function getIconPath(name) {
  const filename = iconMap[name]
  if (filename) {
    return `/cdata_icons/${filename}`
  }
  return null
}

// Slug helpers for routing
export function getCategorySlug(categoryName) {
  return categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function getCategoryFromSlug(slug) {
  return Object.keys(integrationCategories).find(
    (cat) => getCategorySlug(cat) === slug
  ) || null
}

export const categoryDescriptions = {
  "Big Data & NoSQL": "Connect to big data platforms, NoSQL databases, and distributed data systems. Process massive datasets privately on your premises.",
  "Marketing": "Integrate with marketing platforms, analytics tools, ad networks, and social media — all without exposing your campaign data to the cloud.",
  "Collaboration": "Connect to productivity suites, project management tools, communication platforms, and identity providers for seamless team workflows.",
  "CRM & ERP": "Bridge your CRM and ERP systems directly into your AI workflows. Automate customer insights and business operations privately.",
  "File & API": "Access files from cloud storage, local drives, and APIs. Ingest data from REST endpoints, FTP servers, and structured file formats.",
  "Accounting": "Connect to accounting platforms and financial tools. Automate bookkeeping, reporting, and financial analysis securely on-premise.",
  "E-Commerce": "Integrate with e-commerce platforms, payment processors, and marketplace tools. Analyze sales and automate fulfillment privately.",
  "RDBMS": "Connect to relational databases from MySQL to Oracle, SQL Server to PostgreSQL. Query and analyze your structured data with AI.",
}

export const categoryIcons = {
  "Big Data & NoSQL": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  "Marketing": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "Collaboration": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  "CRM & ERP": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "File & API": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  ),
  "Accounting": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  "E-Commerce": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ),
  "RDBMS": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
}
