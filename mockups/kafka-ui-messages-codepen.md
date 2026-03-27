# Kafka UI Messages Mock for CodePen

아래 코드를 각각 CodePen의 `HTML`, `CSS`, `JS` 패널에 붙여넣으면 스크린샷과 같은 정적 화면을 볼 수 있습니다.

## HTML

```html
<div class="shell">
  <header class="topbar">
    <div class="brand">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M5 4.5L16.4 12.7L10.8 15L19.7 23L8.8 19.6L6.7 25.5L4.2 13.2L8.7 11.7L5 4.5Z" fill="#5b5bf5"></path>
      </svg>
      <div class="brand-copy">
        <span class="brand-name">UI for Apache Kafka</span>
        <span class="brand-version">83b5a60 <small>v0.7.2</small></span>
      </div>
    </div>
    <div class="topbar-actions">
      <button class="icon-button" aria-label="Theme">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="4.5" stroke="currentColor" stroke-width="1.5"></circle>
          <path d="M9 1.5V3.2M9 14.8V16.5M1.5 9H3.2M14.8 9H16.5M3.7 3.7L4.9 4.9M13.1 13.1L14.3 14.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      </button>
      <button class="icon-button" aria-label="More">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <button class="icon-button" aria-label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.03 9.52 21.71 9.52 21.43C9.52 21.17 9.51 20.33 9.5 19.39C6.73 20 6.14 18.18 6.14 18.18C5.68 16.97 5.03 16.65 5.03 16.65C4.12 16.01 5.1 16.03 5.1 16.03C6.11 16.1 6.64 17.08 6.64 17.08C7.53 18.65 8.97 18.2 9.54 17.94C9.64 17.27 9.89 16.81 10.17 16.55C7.96 16.29 5.63 15.4 5.63 11.43C5.63 10.3 6.02 9.37 6.66 8.62C6.56 8.36 6.22 7.29 6.76 5.84C6.76 5.84 7.61 5.56 9.49 6.88C10.29 6.65 11.15 6.54 12 6.54C12.85 6.54 13.71 6.65 14.51 6.88C16.39 5.56 17.24 5.84 17.24 5.84C17.78 7.29 17.44 8.36 17.34 8.62C17.98 9.37 18.37 10.3 18.37 11.43C18.37 15.41 16.03 16.28 13.81 16.54C14.16 16.86 14.46 17.5 14.46 18.47C14.46 19.86 14.45 20.99 14.45 21.43C14.45 21.71 14.63 22.04 15.14 21.93C19.11 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z"></path>
        </svg>
      </button>
      <button class="icon-button" aria-label="Discord">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.3 5.5C18.8 4.8 17.2 4.3 15.5 4C15.3 4.4 15 4.9 14.8 5.3C13 5 11.1 5 9.3 5.3C9.1 4.9 8.8 4.4 8.6 4C6.9 4.3 5.3 4.8 3.8 5.5C0.8 10 0 14.4 0.4 18.8C2.4 20.3 4.4 21.2 6.4 21.8C6.9 21.1 7.3 20.3 7.6 19.6C6.9 19.4 6.2 19.1 5.6 18.8C5.8 18.7 6 18.5 6.1 18.4C10 20.2 14.3 20.2 18.1 18.4C18.3 18.5 18.5 18.7 18.7 18.8C18 19.1 17.3 19.4 16.6 19.6C16.9 20.3 17.3 21.1 17.8 21.8C19.8 21.2 21.8 20.3 23.8 18.8C24.3 13.7 22.9 9.4 20.3 5.5ZM8.8 16.2C7.6 16.2 6.7 15.1 6.7 13.8C6.7 12.5 7.6 11.4 8.8 11.4C10 11.4 10.9 12.5 10.9 13.8C10.9 15.1 10 16.2 8.8 16.2ZM15.2 16.2C14 16.2 13.1 15.1 13.1 13.8C13.1 12.5 14 11.4 15.2 11.4C16.4 11.4 17.3 12.5 17.3 13.8C17.3 15.1 16.4 16.2 15.2 16.2Z"></path>
        </svg>
      </button>
    </div>
  </header>

  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-block">
        <div class="dashboard-link">Dashboard</div>
        <div class="cluster-row">
          <div class="cluster-label">
            <span>local</span>
            <span class="cluster-dot"></span>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 5L7 9L11 5" stroke="#7E88A5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      </div>
      <nav class="sidebar-nav">
        <button class="nav-item">Brokers</button>
        <button class="nav-item active">Topics</button>
        <button class="nav-item">Consumers</button>
      </nav>
    </aside>

    <main class="content">
      <div class="content-inner">
        <div class="page-header">
          <div class="breadcrumb">
            <a href="#">Topics</a>
            <span>/</span>
            <div class="page-title">orders.created.v1</div>
          </div>
          <div class="header-actions">
            <button class="primary-button">Produce Message</button>
            <div class="kebab">...</div>
          </div>
        </div>

        <div class="tabs" role="tablist" aria-label="Main Sections">
          <div class="tab">Overview</div>
          <div class="tab active">Messages</div>
          <div class="tab">Consumers</div>
          <div class="tab">Settings</div>
          <div class="tab">Statistics</div>
        </div>

        <section class="toolbar">
          <div class="toolbar-top">
            <div class="field">
              <label>Seek Type</label>
              <div class="field-row">
                <select class="control select seek-type" aria-label="Seek Type">
                  <option>Offset</option>
                </select>
                <input class="control seek-value" value="Offset" aria-label="Seek Value" />
              </div>
            </div>

            <div class="field">
              <label>Partitions</label>
              <select class="control select partitions" aria-label="Partitions">
                <option>All items are selected.</option>
              </select>
            </div>

            <div class="field">
              <label>Key Serde</label>
              <select class="control select serde" aria-label="Key Serde">
                <option>String</option>
              </select>
            </div>

            <div class="field">
              <label>Value Serde</label>
              <select class="control select serde" aria-label="Value Serde">
                <option>String</option>
              </select>
            </div>

            <div class="toolbar-spacer"></div>
            <button class="ghost-link">Clear all</button>
            <button class="submit-button">Submit</button>
            <select class="control select sort-select" aria-label="Order">
              <option>Oldest First</option>
            </select>
          </div>

          <div class="toolbar-bottom">
            <div class="search-wrap">
              <span class="search-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.8"></circle>
                  <path d="M10.8 10.8L14 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                </svg>
              </span>
              <input class="search-control" placeholder="Search" aria-label="Search" />
              <span class="search-clear">x</span>
            </div>
            <button class="filter-button">+ Add Filters</button>
          </div>
        </section>

        <div class="results-meta">
          <span class="done">DONE</span>
          <span>3 ms</span>
          <span>944 Bytes</span>
          <span>4 messages consumed</span>
        </div>

        <div class="table-wrap">
          <div class="table-header">
            <div></div>
            <div>Offset</div>
            <div>Partition</div>
            <div>Timestamp</div>
            <div>
              Key
              <span class="preview-link">Preview</span>
            </div>
            <div>
              Value
              <span class="preview-link">Preview</span>
            </div>
          </div>

          <div id="messageRows"></div>

          <section class="detail-panel">
            <div class="detail-layout">
              <div>
                <div class="detail-tabs" role="tablist" aria-label="Message Detail Tabs">
                  <button class="detail-tab" data-panel="key">Key</button>
                  <button class="detail-tab active" data-panel="value">Value</button>
                  <button class="detail-tab" data-panel="headers">Headers</button>
                </div>
                <div class="json-panel">
                  <pre id="detailContent"></pre>
                </div>
              </div>

              <div class="detail-meta" id="detailMeta"></div>
            </div>
          </section>
        </div>

        <div class="pager">
          <button>&larr; Back</button>
          <button>Next &rarr;</button>
        </div>
      </div>
    </main>
  </div>
</div>
```

## CSS

```css
:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --panel-muted: #f8f9fc;
  --border: #e5e9f2;
  --border-strong: #d8ddea;
  --text: #20233a;
  --muted: #70799a;
  --muted-light: #9aa3bc;
  --accent: #5b5bf5;
  --accent-soft: #eef0ff;
  --sidebar-active: #f1f3f8;
  --success: #21b26f;
  --shadow: 0 18px 40px rgba(31, 38, 68, 0.08);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: "Segoe UI", "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
}

body {
  min-width: 1280px;
}

button,
input,
select {
  font: inherit;
}

.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  height: 48px;
  background: var(--panel);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-copy {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
}

.brand-name {
  font-weight: 600;
}

.brand-version {
  color: var(--accent);
  font-weight: 500;
}

.brand-version small {
  color: var(--muted-light);
  font-size: 0.95em;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--muted);
}

.icon-button {
  width: 22px;
  height: 22px;
  border: 0;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: default;
}

.layout {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 196px;
  background: var(--panel);
  border-right: 1px solid var(--border);
  padding: 16px 0 24px;
}

.sidebar-block {
  padding: 0 20px;
}

.dashboard-link {
  font-size: 28px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 20px;
}

.cluster-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
}

.cluster-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.cluster-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--success);
}

.sidebar-nav {
  margin-top: 6px;
}

.nav-item {
  display: block;
  width: 100%;
  padding: 10px 30px;
  border: 0;
  background: transparent;
  text-align: left;
  color: #5d6888;
  font-size: 15px;
}

.nav-item.active {
  background: var(--sidebar-active);
  color: #1d2350;
  font-weight: 500;
}

.content {
  flex: 1;
  background: var(--panel);
}

.content-inner {
  padding: 18px 0 0;
}

.page-header {
  padding: 0 32px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.breadcrumb a {
  color: #4b63d9;
  text-decoration: none;
  font-size: 22px;
}

.breadcrumb span {
  font-size: 18px;
  color: var(--muted);
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: #13192f;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.primary-button {
  border: 0;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 12px 20px rgba(91, 91, 245, 0.22);
}

.kebab {
  color: var(--muted);
  letter-spacing: 2px;
  font-size: 28px;
  line-height: 1;
}

.tabs {
  display: flex;
  gap: 28px;
  border-bottom: 1px solid var(--border);
  padding: 0 32px;
}

.tab {
  position: relative;
  padding: 12px 0 14px;
  color: #5d6888;
  font-size: 15px;
}

.tab.active {
  color: #151b2f;
  font-weight: 500;
}

.tab.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--accent);
}

.toolbar {
  padding: 8px 16px 10px;
}

.toolbar-top {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  color: #59637f;
  font-size: 13px;
}

.field-row {
  display: flex;
  gap: 8px;
}

.control,
.search-control {
  height: 32px;
  border: 1px solid #cfd7e7;
  border-radius: 4px;
  background: #fff;
  color: #1d2340;
  padding: 0 12px;
}

.control.select {
  padding-right: 36px;
  background-image:
    linear-gradient(45deg, transparent 50%, #70799a 50%),
    linear-gradient(135deg, #70799a 50%, transparent 50%);
  background-position:
    calc(100% - 18px) 13px,
    calc(100% - 12px) 13px;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  appearance: none;
}

.seek-type {
  width: 94px;
}

.seek-value {
  width: 214px;
}

.partitions {
  width: 198px;
}

.serde {
  width: 170px;
}

.toolbar-spacer {
  flex: 1;
  min-width: 16px;
}

.ghost-link {
  border: 0;
  background: transparent;
  color: var(--muted);
  padding: 0 4px 8px;
  cursor: default;
}

.submit-button {
  border: 0;
  background: rgba(91, 91, 245, 0.12);
  color: #1b1d30;
  border-radius: 4px;
  padding: 0 14px;
  height: 32px;
  font-weight: 600;
}

.sort-select {
  width: 138px;
}

.toolbar-bottom {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-wrap {
  position: relative;
}

.search-control {
  width: 242px;
  padding-left: 36px;
  padding-right: 36px;
}

.search-icon,
.search-clear {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #98a3bb;
}

.search-icon {
  left: 12px;
}

.search-clear {
  right: 12px;
  font-size: 14px;
}

.filter-button {
  border: 0;
  background: rgba(91, 91, 245, 0.12);
  color: #1d2240;
  height: 34px;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 500;
}

.results-meta {
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  padding: 10px 24px 4px;
  color: #5f6a89;
  font-size: 12px;
}

.done {
  color: #44506f;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.table-wrap {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 56px 78px 94px 260px 1fr 500px;
  align-items: center;
}

.table-header {
  color: #647090;
  font-size: 12px;
  padding: 12px 24px 6px;
}

.table-row {
  padding: 0 24px;
  min-height: 46px;
  border-top: 1px solid var(--border);
  cursor: pointer;
}

.table-row:first-of-type {
  border-top: 0;
}

.table-row.is-selected {
  background: #fafbff;
}

.toggle-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-button {
  width: 17px;
  height: 17px;
  border: 0;
  border-radius: 3px;
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  line-height: 1;
  padding: 0;
}

.table-cell {
  font-size: 14px;
  color: #1e2440;
}

.preview-empty {
  color: #bcc3d6;
}

.preview-link {
  color: var(--accent);
}

.value-preview {
  color: #233250;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detail-panel {
  background: #f7f8fb;
  padding: 28px 40px 36px;
  border-top: 1px solid var(--border);
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(580px, 860px) 320px;
  gap: 48px;
  align-items: start;
}

.detail-tabs {
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #fff;
}

.detail-tab {
  border: 0;
  background: #fff;
  padding: 8px 16px;
  color: #66708f;
}

.detail-tab.active {
  background: #eff2f9;
  color: #1b2140;
  font-weight: 600;
}

.json-panel {
  margin-top: 16px;
  background: #fff;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  min-height: 160px;
  padding: 18px 20px;
  overflow: auto;
}

.json-panel pre {
  margin: 0;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 13px;
  line-height: 1.35;
  white-space: pre-wrap;
}

.json-key {
  color: #ee5a4c;
}

.json-string {
  color: #0fa37f;
}

.json-number {
  color: #d97706;
}

.json-null {
  color: #7c3aed;
}

.empty-state {
  color: #94a0bd;
}

.detail-meta {
  padding-top: 6px;
}

.meta-row {
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 10px;
  margin-bottom: 18px;
}

.meta-label {
  color: #56627f;
}

.meta-value {
  color: #1d2340;
}

.meta-subtext {
  color: #a0a8bf;
  margin-top: 4px;
  font-size: 12px;
}

.pager {
  padding: 18px 16px 30px;
  display: flex;
  gap: 10px;
}

.pager button {
  height: 40px;
  border: 1px solid var(--border);
  background: #f1f3f8;
  color: #c0c7d8;
  border-radius: 4px;
  padding: 0 18px;
  font-weight: 600;
}

@media (max-width: 1380px) {
  body {
    min-width: 1140px;
  }

  .table-header,
  .table-row {
    grid-template-columns: 56px 72px 88px 230px 1fr 380px;
  }

  .detail-layout {
    grid-template-columns: minmax(520px, 1fr) 280px;
  }
}
```

## JS

```js
const messages = [
  {
    offset: "0",
    partition: "2",
    timestamp: "2026. 3. 26. 13시 40분 4초",
    keyPreview: "",
    valuePreview: '{"eventId":"29507ae8-663e-4ec4-9415-a854ec5...',
    value: {
      eventId: "29507ae8-663e-4ec4-9415-a854ec52f91",
      eventName: "orders.created.v1",
      occurredAt: "2026-03-26T04:40:04.218Z",
      orderId: "a0d2fe10-4e32-4753-bf28-9137a7b230ad",
      customerId: "customer-201",
      totalAmount: 54000,
      currency: "KRW"
    }
  },
  {
    offset: "0",
    partition: "0",
    timestamp: "2026. 3. 26. 16시 1분 40초",
    keyPreview: "",
    valuePreview: '{"eventId":"d970c509-20ac-4d36-ab5e-8ad9709...',
    value: {
      eventId: "d970c509-20ac-4d36-ab5e-8ad9709b0384",
      eventName: "orders.created.v1",
      occurredAt: "2026-03-26T07:01:40.902Z",
      orderId: "52eb9494-95a2-46cf-b92f-2a4465f3767b",
      customerId: "customer-087",
      totalAmount: 21000,
      currency: "KRW"
    }
  },
  {
    offset: "1",
    partition: "2",
    timestamp: "2026. 3. 27. 10시 4분 52초",
    keyPreview: "",
    valuePreview: '{"eventId":"85fe6a18-d3ac-43f2-b4df-7a7e818b...',
    value: {
      eventId: "85fe6a18-d3ac-43f2-b4df-7a7e818b7b85",
      eventName: "orders.created.v1",
      occurredAt: "2026-03-27T01:04:52.149Z",
      orderId: "1d1f7a62-c6b1-4422-8f1b-faf508c69257",
      customerId: "customer-441",
      totalAmount: 87000,
      currency: "KRW"
    }
  },
  {
    offset: "0",
    partition: "1",
    timestamp: "2026. 3. 27. 10시 25분 7초",
    keyPreview: "",
    valuePreview: '{"eventId":"d33c6dd0-9eae-4f6d-93ad-46c71c0...',
    value: {
      eventId: "d33c6dd0-9eae-4f6d-93ad-46c71c052391",
      eventName: "orders.created.v1",
      occurredAt: "2026-03-27T01:25:07.436Z",
      orderId: "80f1fc55-ff74-4633-8ffe-f1d00eb40860",
      customerId: "customer-101",
      totalAmount: 99000,
      currency: "KRW"
    }
  }
];

let selectedIndex = 3;
let activePanel = "value";

const rowsRoot = document.getElementById("messageRows");
const detailContent = document.getElementById("detailContent");
const detailMeta = document.getElementById("detailMeta");
const detailTabs = Array.from(document.querySelectorAll(".detail-tab"));

function syntaxHighlight(value) {
  const json = JSON.stringify(value, null, 2);
  const escaped = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?)/g,
    (token) => {
      if (/^"/.test(token)) {
        if (/:$/.test(token)) {
          return '<span class="json-key">' + token + "</span>";
        }
        return '<span class="json-string">' + token + "</span>";
      }

      if (token === "null" || token === "true" || token === "false") {
        return '<span class="json-null">' + token + "</span>";
      }

      return '<span class="json-number">' + token + "</span>";
    }
  );
}

function renderRows() {
  rowsRoot.innerHTML = messages
    .map((message, index) => {
      const isSelected = index === selectedIndex;
      const keyPreview = message.keyPreview || '<span class="preview-empty"></span>';
      return `
        <div class="table-row ${isSelected ? "is-selected" : ""}" data-index="${index}">
          <div class="toggle-cell">
            <button class="toggle-button" type="button" aria-label="${isSelected ? "Collapse" : "Expand"}">
              ${isSelected ? "&minus;" : "+"}
            </button>
          </div>
          <div class="table-cell">${message.offset}</div>
          <div class="table-cell">${message.partition}</div>
          <div class="table-cell">${message.timestamp}</div>
          <div class="table-cell">${keyPreview}</div>
          <div class="table-cell value-preview">${message.valuePreview}</div>
        </div>
      `;
    })
    .join("");
}

function renderMeta(message) {
  detailMeta.innerHTML = `
    <div class="meta-row">
      <div class="meta-label">Timestamp</div>
      <div>
        <div class="meta-value">${message.timestamp}</div>
        <div class="meta-subtext">Timestamp type: CREATE_TIME</div>
      </div>
    </div>
    <div class="meta-row">
      <div class="meta-label">Key Serde</div>
      <div>
        <div class="meta-value"></div>
        <div class="meta-subtext">Size: 0 Bytes</div>
      </div>
    </div>
    <div class="meta-row">
      <div class="meta-label">Value Serde</div>
      <div>
        <div class="meta-value">String</div>
        <div class="meta-subtext">Size: 236 Bytes</div>
      </div>
    </div>
  `;
}

function renderDetail() {
  const message = messages[selectedIndex];

  detailTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.panel === activePanel);
  });

  if (activePanel === "key") {
    detailContent.className = "empty-state";
    detailContent.textContent = "{}";
  } else if (activePanel === "headers") {
    detailContent.className = "empty-state";
    detailContent.textContent = "No headers";
  } else {
    detailContent.className = "";
    detailContent.innerHTML = syntaxHighlight(message.value);
  }

  renderMeta(message);
}

rowsRoot.addEventListener("click", (event) => {
  const row = event.target.closest(".table-row");

  if (!row) {
    return;
  }

  selectedIndex = Number(row.dataset.index);
  activePanel = "value";
  renderRows();
  renderDetail();
});

detailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activePanel = tab.dataset.panel;
    renderDetail();
  });
});

renderRows();
renderDetail();
```
