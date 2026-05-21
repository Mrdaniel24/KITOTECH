# KitoTech Website — Implementation Plan

> **Last updated:** 2026-05-21
> **Status:** Active Development

---

## Table of Contents

1. [Mobile Responsiveness Plan](#mobile-responsiveness-plan)
2. [Product Management Module](#product-management-module)
   - [Module Overview](#module-overview)
   - [Admin Product Management Workflow](#admin-product-management-workflow)
   - [User Product Browsing Workflow](#user-product-browsing-workflow)
   - [Database Structure](#database-structure)
   - [API Endpoints](#api-endpoints)
   - [Frontend Pages & Components](#frontend-pages--components)
   - [Validation Rules](#validation-rules)
   - [Business Logic](#business-logic)
   - [Testing Checklist](#testing-checklist)

---

# Mobile Responsiveness Plan

*Mpango wa Kufanya Tovuti ya Kitotech Kuwa ya Kifaa cha Mkononi (Mobile Responsive)*

Huu ni mpango wa kina wa kurekebisha tovuti yote ya **Kitotech Design System** ili iweze kuonyesha muonekano mzuri na unaofaa kwenye simu za mkononi na tablet (mobile responsiveness), badala ya kuwa na muundo wa kompyuta (desktop-only) pekee.

## Mapendekezo ya Uboreshaji (Proposed Changes)

Marekebisho makuu yatafanyika kwenye faili za **CSS** na **React JSX** zifuatazo ili kuongeza media queries na tabia za kuitikia vifaa tofauti:

---

### 1. Navigeshoni (Navigation & Mobile Menu)

Sasa hivi navbar haina menu ya simu (hamburger menu), na viungo (links) na vitufe vya CTA vinajipanga kwa mstari mrefu, jambo linalofanya viharibike kwenye skrini ndogo.

#### [MODIFY] [Nav.jsx](file:///c:/project/Kitotech%20Design%20System/Nav.jsx)
- Tutaongeza state ya React ya `isOpen` (kufungua/kufunga menu ya simu).
- Tutaongeza kitufe cha hamburger (`.menu-toggle`) chenye micro-animations nzuri za kufungua/kufunga.
- Tutaongeza madirisha na class za `.mobile-open` pale menu inapofunguliwa.

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- Tutaongeza media queries za `@media (max-width: 960px)` na `@media (max-width: 640px)`.
- Kwenye simu, tutaficha viungo vya kawaida vya usawa na kuonyesha kitufe cha hamburger.
- Menu ya simu itakapofunguka, itaonyesha jopo maridadi la kuteleza chini (slide-down panel) lenye rangi za giza za kuvutia, uhuishaji mwororo (smooth animation), glassmorphism (`backdrop-filter: blur`), na viungo vikiwa vimepangwa kwa wima na nafasi ya kutosha.
- Tutapunguza saizi ya Announcement Bar (`.announce`) kwenye simu ili kuzuia maandishi kurefuka kupita kiasi.

---

### 2. Mpangilio Mkuu na Vizuizi (Containers & Page Heros)

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- **Containers**: Tutapunguza padding za pande zote za `.container` kutoka `32px` hadi `16px` kwenye simu ili kuongeza nafasi ya maudhui.
- **Page Hero**: Kwenye kurasa za ndani (about, solutions, products, n.k.), `.page-hero` itarekebishwa ili `min-height` ipungue na saizi ya fonti clamp zionekane vizuri. Pia diagonal wedge (`::before`) itaondolewa au kurekebishwa ili isifunike maandishi kwenye skrini nyembamba.
- **CTA Strip**: `.cta-strip-inner` itabadilishwa kuwa `flex-direction: column` kwenye simu ili maandishi na vitufe vijipange kwa wima na kuvutia.
- **Hikvision Banner (`.hik-banner`)**: Tutaifanya iwe na mpangilio wa safu wima na kuficha mstari wa mgawanyiko (`.hik-divider`) kwenye simu.

---

### 3. Footer na Gridi (Footer & Content Grids)

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- **Footer**: Gridi ya footer (`.footer .cols`) itabadilishwa kutoka nguzo 4 (`1.3fr 1fr 1fr 1fr`) hadi nguzo 2 kwenye tablet, na nguzo 1 ya wima kwenye simu za mkononi. Hii itazuia maandishi kuingiliana.
- **Contact Page Grid (`.contact-grid`)**: Sasa hivi fomu na maelezo ya mawasiliano vimekaa pembeni mwa kila mmoja. Kwenye skrini za chini ya `960px`, tutavifanya vijipange wima (safu 1) ili kila kimoja kichukue upana mzima.

---

### 4. Floaters na Jopo la AI Chat

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- Kwenye simu ndogo, `.ai-panel` (jopo la mazungumzo ya AI) itarekebishwa upana wake kuwa `calc(100vw - 32px)` na urefu wake uwe mdogo zaidi ili usipite mipaka ya skrini na iwe rahisi kuitumia.

---

## Mpango wa Uthibitishaji (Verification Plan)

Tutahakikisha kuwa kila ukurasa unaonekana vizuri kwenye kompyuta na simu.

### Uthibitishaji wa Mwongozo (Manual Verification)
1. Kufungua `index.html`, `about.html`, `products.html`, `solutions.html`, na `contact.html` kwenye kivinjari.
2. Kupunguza upana wa kivinjari ili kuiga skrini za Simu (mf. iPhone, Samsung) na Tablet.
3. Kujaribu kubonyeza kitufe cha hamburger cha menu ya simu ili kuona ikiwa inafunguka na kufungana kwa usahihi.
4. Kuhakikisha kuwa hakuna maandishi yoyote yanayofunikwa, kuingiliana, au kuvuja nje ya skrini (no horizontal scrollbars).

---

---

# Product Management Module

---

## Module Overview

The Product Management Module is the core commerce layer of the KitoTech website. It provides a full-featured admin interface for managing the product catalogue and automatically reflects all changes on the public-facing website — no manual HTML editing required.

### Architecture Summary

```
┌─────────────────────────────────────────────────────────┐
│                    KitoTech System                      │
│                                                         │
│   ┌─────────────────┐        ┌──────────────────────┐  │
│   │   Admin Panel   │        │   Public Website     │  │
│   │                 │        │                      │  │
│   │  Product CRUD   │──API──▶│  Products Page       │  │
│   │  Image Upload   │        │  Product Detail Page │  │
│   │  Colour Mgmt    │        │  Featured Products   │  │
│   │  Category Mgmt  │        │  Category Filter     │  │
│   └────────┬────────┘        └──────────────────────┘  │
│            │                                            │
│   ┌────────▼────────────────────────────────────────┐   │
│   │              Laravel Backend                    │   │
│   │   REST API  ·  MySQL Database  ·  File Storage  │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel (PHP) |
| Database | MySQL |
| File Storage | Local disk / Laravel Storage |
| Admin Frontend | HTML + CSS + Vanilla JS (or React if applicable) |
| Public Frontend | Existing KitoTech HTML/CSS/JS pages |
| API Format | JSON REST API |
| Auth (Admin) | Laravel Sanctum / Session Auth |

---

## Admin Product Management Workflow

### Step-by-Step Admin Flow

```
Admin Login
    │
    ▼
Dashboard ──▶ Products Section
                    │
          ┌─────────┴──────────┐
          │                    │
    View All Products     Add New Product
          │                    │
    ┌─────┴─────┐         Fill Form:
    │           │          • Name
   Edit       Delete       • Category
    │                      • Descriptions
    │                      • Price / Discount
    │                      • Main Image Upload
    │                      • Gallery Images Upload
    │                      • Colour Options
    │                      • Status (Published/Draft)
    │                      • Featured Toggle
    │                      │
    └──────────────────────▶ Save Product
                                  │
                            Product appears
                           on public website
```

### Admin Capabilities Checklist

| Capability | Description |
|-----------|-------------|
| Add product | Full product creation form |
| Edit product | In-place editing of all product fields |
| Delete product | Soft delete with confirmation dialog |
| View all products | Paginated table with search and filter |
| Product name | Required text field |
| Full description | Rich text / textarea |
| Short description | Subtitle shown on product cards |
| Price | Decimal field (e.g., 25,000.00) |
| Discount price | Optional; triggers automatic % calculation |
| Discount percentage | Auto-calculated: `((price - discount_price) / price) * 100` |
| Main image | Single required image upload with preview |
| Gallery images | Multiple additional images with drag-sort |
| Category | Dropdown populated from `product_categories` |
| Status | Toggle: Published / Draft / Out of Stock |
| Colour options | Add/edit/remove colour variants per product |
| Featured flag | Checkbox to surface product on homepage |
| Publish/Unpublish | One-click visibility toggle |

---

## User Product Browsing Workflow

### Step-by-Step User Flow

```
User visits products.html
          │
          ▼
   Products Grid loads
  (published products only)
          │
    ┌─────┴──────────────┐
    │                    │
Filter by Category   Search by Name
    │                    │
    └─────────┬──────────┘
              │
        Product Card
      ┌────────────────┐
      │  Product Image │
      │  Product Name  │
      │  Short Desc    │
      │  Price         │
      │  Discount Badge│
      │  Colour Dots   │
      │ [View Details] │
      └────────┬───────┘
               │ Click
               ▼
      Product Details Page
      ┌────────────────────┐
      │  Main Image        │
      │  Image Gallery     │
      │  Full Name         │
      │  Full Description  │
      │  Price / Discount  │
      │  Colour Options    │
      │  Category          │
      │  Availability      │
      │  Related Products  │
      │  [Request Quote]   │
      └────────────────────┘
```

---

## Database Structure

### Entity Relationship Diagram

```
product_categories
       │
       │ 1:N
       ▼
   products ──────────── product_images
       │           1:N
       │ 1:N
       ▼
  product_colours
```

---

### Table: `product_categories`

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| `id` | BIGINT UNSIGNED | PK, AUTO_INCREMENT | |
| `name` | VARCHAR(150) | NOT NULL | e.g. "Security Cameras" |
| `slug` | VARCHAR(180) | NOT NULL, UNIQUE | Auto-generated from name |
| `description` | TEXT | NULLABLE | |
| `status` | ENUM('active','inactive') | DEFAULT 'active' | |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | | |

```sql
CREATE TABLE product_categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(180) NOT NULL UNIQUE,
    description TEXT,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

### Table: `products`

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| `id` | BIGINT UNSIGNED | PK, AUTO_INCREMENT | |
| `category_id` | BIGINT UNSIGNED | FK → product_categories.id | NULLABLE (uncategorised allowed) |
| `name` | VARCHAR(255) | NOT NULL | |
| `slug` | VARCHAR(300) | NOT NULL, UNIQUE | Auto-generated; used in URL |
| `short_description` | VARCHAR(500) | NULLABLE | Shown on product cards |
| `full_description` | LONGTEXT | NULLABLE | Shown on detail page |
| `price` | DECIMAL(12,2) | NOT NULL | Base price |
| `discount_price` | DECIMAL(12,2) | NULLABLE | Optional sale price |
| `discount_percentage` | DECIMAL(5,2) | NULLABLE | Computed, stored for performance |
| `main_image` | VARCHAR(500) | NULLABLE | Path to primary product image |
| `status` | ENUM('published','draft','out_of_stock') | DEFAULT 'draft' | Controls visibility |
| `is_featured` | TINYINT(1) | DEFAULT 0 | Featured on homepage |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | | |

```sql
CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(300) NOT NULL UNIQUE,
    short_description VARCHAR(500),
    full_description LONGTEXT,
    price DECIMAL(12,2) NOT NULL,
    discount_price DECIMAL(12,2),
    discount_percentage DECIMAL(5,2),
    main_image VARCHAR(500),
    status ENUM('published', 'draft', 'out_of_stock') DEFAULT 'draft',
    is_featured TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES product_categories(id) ON DELETE SET NULL,
    INDEX idx_status (status),
    INDEX idx_featured (is_featured),
    INDEX idx_category (category_id)
);
```

---

### Table: `product_images`

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| `id` | BIGINT UNSIGNED | PK, AUTO_INCREMENT | |
| `product_id` | BIGINT UNSIGNED | FK → products.id, NOT NULL | |
| `image_path` | VARCHAR(500) | NOT NULL | Relative path from storage root |
| `sort_order` | SMALLINT UNSIGNED | DEFAULT 0 | For gallery ordering |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | | |

```sql
CREATE TABLE product_images (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    sort_order SMALLINT UNSIGNED DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_sort (product_id, sort_order)
);
```

---

### Table: `product_colours`

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| `id` | BIGINT UNSIGNED | PK, AUTO_INCREMENT | |
| `product_id` | BIGINT UNSIGNED | FK → products.id, NOT NULL | |
| `colour_name` | VARCHAR(100) | NOT NULL | e.g. "Matte Black" |
| `colour_code` | VARCHAR(20) | NOT NULL | Hex code, e.g. `#1a1a1a` |
| `colour_image` | VARCHAR(500) | NULLABLE | Optional swatch image |
| `status` | ENUM('available','unavailable') | DEFAULT 'available' | |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | | |

```sql
CREATE TABLE product_colours (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NOT NULL,
    colour_name VARCHAR(100) NOT NULL,
    colour_code VARCHAR(20) NOT NULL,
    colour_image VARCHAR(500),
    status ENUM('available', 'unavailable') DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_product_colours (product_id)
);
```

---

## API Endpoints

### Authentication

All `/api/admin/*` routes require a valid admin session or Bearer token via Laravel Sanctum. Public routes are unauthenticated.

---

### Admin Endpoints

#### Product CRUD

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/admin/products` | List all products (paginated) | Query: `page`, `search`, `category_id`, `status` |
| `POST` | `/api/admin/products` | Create new product | See Product Payload |
| `GET` | `/api/admin/products/{id}` | Get single product with images & colours | — |
| `PUT` | `/api/admin/products/{id}` | Update product fields | See Product Payload |
| `DELETE` | `/api/admin/products/{id}` | Delete product (and cascade images/colours) | — |

#### Product Images

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/admin/products/{id}/images` | Upload additional gallery images | `multipart/form-data`: `images[]` |
| `PUT` | `/api/admin/product-images/{id}` | Update sort order | `{ "sort_order": 2 }` |
| `DELETE` | `/api/admin/product-images/{id}` | Remove a gallery image | — |

#### Product Colours

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/admin/products/{id}/colours` | Add colour variant | See Colour Payload |
| `PUT` | `/api/admin/product-colours/{id}` | Edit colour variant | See Colour Payload |
| `DELETE` | `/api/admin/product-colours/{id}` | Remove colour variant | — |

#### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/admin/categories` | List all categories |
| `POST` | `/api/admin/categories` | Create category |
| `PUT` | `/api/admin/categories/{id}` | Update category |
| `DELETE` | `/api/admin/categories/{id}` | Delete category |

---

### Public Endpoints

| Method | Endpoint | Description | Notes |
|--------|----------|-------------|-------|
| `GET` | `/api/products` | List published products | Query: `page`, `search`, `category` |
| `GET` | `/api/products/{slug}` | Full product detail | Includes images, colours, related products |
| `GET` | `/api/products/category/{slug}` | Products by category | |
| `GET` | `/api/featured-products` | Featured products only | For homepage widget |
| `GET` | `/api/categories` | All active categories | For filter dropdown |

---

### Request & Response Payloads

#### Product Create/Update Payload (`multipart/form-data`)

```json
{
  "name": "Hikvision DS-2CD2143G2-I",
  "category_id": 2,
  "short_description": "4MP AcuSense Fixed Dome Network Camera",
  "full_description": "Full detailed description...",
  "price": 85000,
  "discount_price": 72000,
  "main_image": "<file>",
  "status": "published",
  "is_featured": true
}
```

#### Product Response (Public)

```json
{
  "id": 14,
  "name": "Hikvision DS-2CD2143G2-I",
  "slug": "hikvision-ds-2cd2143g2-i",
  "short_description": "4MP AcuSense Fixed Dome Network Camera",
  "full_description": "...",
  "price": "85000.00",
  "discount_price": "72000.00",
  "discount_percentage": "15.29",
  "main_image": "/storage/products/main/hikvision-dome.jpg",
  "status": "published",
  "is_featured": true,
  "category": {
    "id": 2,
    "name": "Security Cameras",
    "slug": "security-cameras"
  },
  "images": [
    { "id": 31, "image_path": "/storage/products/gallery/img1.jpg", "sort_order": 0 },
    { "id": 32, "image_path": "/storage/products/gallery/img2.jpg", "sort_order": 1 }
  ],
  "colours": [
    { "id": 5, "colour_name": "Matte White", "colour_code": "#f5f5f5", "colour_image": null, "status": "available" },
    { "id": 6, "colour_name": "Matte Black", "colour_code": "#1a1a1a", "colour_image": null, "status": "available" }
  ],
  "related_products": [...]
}
```

#### Colour Payload

```json
{
  "colour_name": "Gunmetal Grey",
  "colour_code": "#5a5a5a",
  "colour_image": "<file | null>",
  "status": "available"
}
```

---

## Frontend Pages & Components

### Admin Panel Pages

#### 1. Product List Page — `/admin/products`

```
┌─────────────────────────────────────────────────────────┐
│  Products                              [+ Add Product]  │
├─────────────────────────────────────────────────────────┤
│  Search: [____________]  Category: [All ▼]  Status:[All]│
├────┬──────────────────┬───────────┬────────┬────────────┤
│ #  │ Product          │ Price     │ Status │ Actions    │
├────┼──────────────────┼───────────┼────────┼────────────┤
│ 1  │ [img] Camera XR  │ KES 85,000│Published│ Edit Delete│
│ 2  │ [img] NVR-8CH    │ KES 40,000│ Draft  │ Edit Delete│
└────┴──────────────────┴───────────┴────────┴────────────┘
                        Pagination: < 1 2 3 >
```

**Component responsibilities:**
- Fetch products from `GET /api/admin/products`
- Render paginated table rows
- Search input with debounce (300ms)
- Category and status filter dropdowns
- Edit button → navigate to edit form
- Delete button → confirm dialog → `DELETE /api/admin/products/{id}`
- Add Product button → navigate to add form

---

#### 2. Add / Edit Product Form — `/admin/products/create` & `/admin/products/{id}/edit`

**Form Sections:**

**Section A — Basic Information**
```
Product Name *          [_________________________________]
Category *              [Select Category ▼              ]
Short Description       [_________________________________]
Full Description        [ Rich Text Area                 ]
                        [                                ]
```

**Section B — Pricing**
```
Base Price (KES) *      [__________]
Discount Price (KES)    [__________]   Discount: [---%] (auto)
```

**Section C — Main Image**
```
┌────────────────────────────────────┐
│   [Drag & Drop or Click to Upload] │   ← Preview appears here
│         Main Product Image *       │
└────────────────────────────────────┘
   [Current image thumbnail if edit]  [Remove]
```

**Section D — Image Gallery**
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐
│  img 1   │ │  img 2   │ │  img 3   │ │  + Add Images    │
│  [✕ del] │ │  [✕ del] │ │  [✕ del] │ │  (multiple)      │
└──────────┘ └──────────┘ └──────────┘ └──────────────────┘
   Drag to reorder gallery images
```

**Section E — Colour Options**
```
Colour Variants
┌────────────┬──────────┬───────────────┬────────┬─────────┐
│ Name       │ Hex Code │ Swatch Preview│ Status │ Action  │
├────────────┼──────────┼───────────────┼────────┼─────────┤
│ Matte White│ #f5f5f5  │    ████       │ Active │ [✕ del] │
│ Matte Black│ #1a1a1a  │    ████       │ Active │ [✕ del] │
└────────────┴──────────┴───────────────┴────────┴─────────┘
[+ Add Colour]
```

**Add Colour Sub-Form:**
```
Colour Name [__________]  Hex Code [#______]  Preview [████]
Optional Colour Image [upload]   Status [Available ▼]
[Add]
```

**Section F — Product Settings**
```
Status          ( ) Published  ( ) Draft  ( ) Out of Stock
Featured        [✓] Mark as Featured Product
```

**Form Actions:**
```
                        [Cancel]  [Save as Draft]  [Publish]
```

---

#### 3. Category Management — `/admin/categories`

```
┌──────────────────────────────────────────────┐
│ Categories                    [+ Add Category]│
├────┬──────────────────┬──────────┬────────────┤
│ #  │ Name             │ Status   │ Actions    │
├────┼──────────────────┼──────────┼────────────┤
│ 1  │ Security Cameras │ Active   │ Edit Delete│
│ 2  │ Access Control   │ Active   │ Edit Delete│
└────┴──────────────────┴──────────┴────────────┘
```

---

### Public Website Pages

#### 1. Products Page — `products.html`

```
┌─────────────────────────────────────────────────────────┐
│   [Page Hero]  Our Products                             │
├─────────────────────────────────────────────────────────┤
│  Category: [All] [Cameras] [NVR] [Access Control]       │
│  Search: [___________________________] [🔍]             │
├─────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  [img]   │  │  [img]   │  │  [img]   │              │
│  │ -15% OFF │  │          │  │ -10% OFF │              │
│  │ Product 1│  │ Product 2│  │ Product 3│              │
│  │ Short... │  │ Short... │  │ Short... │              │
│  │ ~~85,000 │  │ KES 40K  │  │ ~~72,000 │              │
│  │ KES 72K  │  │          │  │ KES 65K  │              │
│  │ ●●● [3]  │  │ ● [1]    │  │ ●●[2]    │  ← colours  │
│  │[View →]  │  │[View →]  │  │[View →]  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                  < 1 2 3 >                              │
└─────────────────────────────────────────────────────────┘
```

**Product Card Component fields:**
- Main image (clickable)
- Discount badge (shown only if `discount_price` exists): "–15%"
- Product name
- Short description (max 2 lines, truncated with CSS)
- Price: strikethrough original + highlighted discount price (or plain price)
- Colour dots: small circles using `colour_code`, max 5 shown + overflow count
- "View Details" button → links to product detail page

---

#### 2. Product Detail Page — `product-detail.html?slug={slug}`

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Products                                     │
├────────────────────────┬────────────────────────────────┤
│                        │  Product Name                  │
│   [Main Product Image] │  Category: Security Cameras    │
│                        │  ─────────────────────────     │
│  ┌────┐┌────┐┌────┐    │  KES 72,000   ~~KES 85,000~~  │
│  │img1││img2││img3│    │  15% OFF                       │
│  └────┘└────┘└────┘    │                                │
│  Gallery thumbnails    │  Availability: In Stock        │
│                        │                                │
│                        │  Colours:                      │
│                        │  ● Matte White  ● Matte Black  │
│                        │                                │
│                        │  [Request a Quote]             │
│                        │  [Contact Us]                  │
├────────────────────────┴────────────────────────────────┤
│  Description                                            │
│  ─────────────────────────────────────────────────────  │
│  Full product description text here...                  │
├─────────────────────────────────────────────────────────┤
│  Related Products                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Related 1│  │ Related 2│  │ Related 3│              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

**Detail page features:**
- Lightbox gallery on thumbnail click
- Colour selection highlights the chosen colour swatch
- Related products: same category, max 4, exclude current product
- "Request a Quote" button links to `contact.html` with product name pre-filled in URL param

---

#### 3. Homepage Featured Products Section — `index.html`

```
┌─────────────────────────────────────────────────────────┐
│  Featured Products                   [View All →]       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Featured │  │ Featured │  │ Featured │              │
│  │ Product 1│  │ Product 2│  │ Product 3│              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

Fetched via `GET /api/featured-products` on page load.

---

## Validation Rules

### Product Validation (Laravel `FormRequest`)

| Field | Rules |
|-------|-------|
| `name` | `required`, `string`, `max:255`, `unique:products,name,{id}` |
| `category_id` | `nullable`, `exists:product_categories,id` |
| `short_description` | `nullable`, `string`, `max:500` |
| `full_description` | `nullable`, `string` |
| `price` | `required`, `numeric`, `min:0`, `max:99999999.99` |
| `discount_price` | `nullable`, `numeric`, `min:0`, `lt:price` |
| `main_image` | `nullable`, `image`, `mimes:jpeg,jpg,png,webp`, `max:5120` (5MB) |
| `status` | `required`, `in:published,draft,out_of_stock` |
| `is_featured` | `boolean` |

### Image Upload Validation

| Field | Rules |
|-------|-------|
| `images[]` | `array`, `max:10` (10 images per upload batch) |
| `images.*` | `image`, `mimes:jpeg,jpg,png,webp`, `max:5120` (5MB each) |

### Colour Validation

| Field | Rules |
|-------|-------|
| `colour_name` | `required`, `string`, `max:100` |
| `colour_code` | `required`, `string`, `regex:/^#[0-9A-Fa-f]{3,6}$/` |
| `colour_image` | `nullable`, `image`, `mimes:jpeg,jpg,png,webp`, `max:2048` (2MB) |
| `status` | `required`, `in:available,unavailable` |

### Category Validation

| Field | Rules |
|-------|-------|
| `name` | `required`, `string`, `max:150`, `unique:product_categories,name,{id}` |
| `description` | `nullable`, `string` |
| `status` | `required`, `in:active,inactive` |

### Frontend Validation (JavaScript)

- Price fields: numeric only, positive values
- Discount price: must be less than base price (live check)
- Hex colour code: regex `/^#[0-9A-Fa-f]{3,6}$/` validated on input blur
- Image files: type check (`image/*`) and size check (max 5MB) before upload
- Required fields: inline error messages shown on blur

---

## Business Logic

### Discount Percentage Auto-Calculation

Whenever `discount_price` is set or updated, `discount_percentage` is computed and stored:

```php
// Laravel Model Observer or Service Layer
if ($product->discount_price && $product->price > 0) {
    $product->discount_percentage = round(
        (($product->price - $product->discount_price) / $product->price) * 100,
        2
    );
} else {
    $product->discount_percentage = null;
}
```

On the frontend, the discount badge is only rendered when `discount_percentage` is not null:

```javascript
// JS rendering logic
if (product.discount_percentage) {
    badge.textContent = `-${Math.round(product.discount_percentage)}%`;
    badge.style.display = 'block';
}
```

### Slug Auto-Generation

Slugs are generated from the product name on creation and never change on edit (to preserve URLs):

```php
// Only set on create, not on update
if (!$product->exists) {
    $product->slug = Str::slug($product->name) . '-' . uniqid();
}
```

### Published Products Only (Public API)

The public query scope filters unpublished products:

```php
// Product Model
public function scopePublished($query) {
    return $query->where('status', 'published');
}
```

### Image Storage

```
storage/app/public/products/
├── main/          ← main product images
├── gallery/       ← additional gallery images
└── colours/       ← optional colour swatch images
```

Symlink: `php artisan storage:link` exposes `/storage/` publicly.

### Related Products Query

```php
// Return up to 4 products from the same category, excluding current product
Product::published()
    ->where('category_id', $product->category_id)
    ->where('id', '!=', $product->id)
    ->limit(4)
    ->get();
```

### Featured Products

Only products with `is_featured = 1` AND `status = 'published'` are returned by `GET /api/featured-products`. Maximum 6 returned.

---

## Testing Checklist

### Admin Side

**Product CRUD**
- [ ] Admin can create a product with all required fields
- [ ] Admin can create a product with only required fields (optional fields empty)
- [ ] Admin can edit an existing product's name, price, description, status
- [ ] Admin can delete a product — product disappears from public site
- [ ] Admin cannot create a product with a duplicate name
- [ ] Admin cannot set discount price higher than base price
- [ ] Slug is auto-generated on create and does not change on edit

**Image Management**
- [ ] Admin can upload a main product image with live preview
- [ ] Admin can remove the main product image
- [ ] Admin can upload multiple gallery images at once
- [ ] Admin can remove individual gallery images
- [ ] Admin cannot upload a file that is not an image (PDF, EXE, etc.)
- [ ] Admin cannot upload an image larger than 5MB
- [ ] Gallery images are displayed in sort_order on the public side

**Colour Management**
- [ ] Admin can add a colour variant with name, hex code, and status
- [ ] Admin can add an optional swatch image to a colour
- [ ] Colour preview swatch updates live when hex code is entered
- [ ] Invalid hex code shows validation error
- [ ] Admin can mark a colour as unavailable
- [ ] Admin can delete a colour variant
- [ ] Unavailable colours are visually distinct on the public side

**Category Management**
- [ ] Admin can create a category
- [ ] Admin can edit a category name
- [ ] Admin can deactivate a category
- [ ] Inactive category products do not appear in the public category filter

**Business Logic**
- [ ] Discount percentage auto-calculates when discount price is entered
- [ ] Discount percentage clears when discount price is removed
- [ ] Featured toggle surfaces product on homepage
- [ ] Draft products are not visible on the public site
- [ ] Out-of-stock products show availability status on detail page

---

### Public / User Side

**Products Page**
- [ ] Published products appear on products page
- [ ] Draft and deleted products do NOT appear
- [ ] Category filter works correctly
- [ ] Product search filters by name (partial match)
- [ ] Discount badge shows when discount_price is set
- [ ] Colour dots display using product colour codes
- [ ] "View Details" button navigates to correct product detail page
- [ ] Pagination works correctly

**Product Detail Page**
- [ ] Correct product loads from URL slug
- [ ] Main image displays
- [ ] Gallery thumbnails display in sort order
- [ ] Clicking thumbnail updates main displayed image
- [ ] Full description renders correctly
- [ ] Discount price and percentage shown when applicable
- [ ] Colour swatches display for each colour variant
- [ ] Unavailable colours are shown with a disabled/strikethrough style
- [ ] Related products section shows max 4 from same category
- [ ] "Request a Quote" button links to contact page with product name in URL

**Homepage**
- [ ] Featured products section loads featured & published products
- [ ] Max 6 featured products displayed
- [ ] "View All" link navigates to products page

---

### API Tests (Automated — PHPUnit / Pest)

```
ProductApiTest
├── test_admin_can_list_products
├── test_admin_can_create_product
├── test_admin_can_update_product
├── test_admin_can_delete_product
├── test_admin_can_upload_product_images
├── test_admin_can_delete_product_image
├── test_admin_can_add_colour_variant
├── test_admin_can_delete_colour_variant
├── test_discount_percentage_auto_calculates
├── test_public_only_sees_published_products
├── test_public_product_detail_by_slug
├── test_featured_products_endpoint
└── test_category_filter_on_public_endpoint
```

---

### Validation Tests

- [ ] Required field missing → 422 Unprocessable Content
- [ ] Invalid image format → validation error
- [ ] Image over 5MB → validation error
- [ ] discount_price >= price → validation error
- [ ] Invalid hex colour code → validation error
- [ ] Duplicate product name → validation error

---

*End of Product Management Module Specification*
