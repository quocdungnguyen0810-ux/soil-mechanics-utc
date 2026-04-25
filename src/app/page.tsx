const sitemap = [
  {
    title: 'Public Website',
    items: [
      'Trang chủ',
      'Giới thiệu GreenPeat',
      'Thương hiệu AgriCoX',
      'Danh mục sản phẩm',
      'Chi tiết sản phẩm',
      'Công nghệ & quy trình',
      'Dự án tiêu biểu (case study)',
      'Đặt hàng / Yêu cầu báo giá (form + RFQ cart)',
      'Liên hệ',
      'Tin tức / Tài liệu tải về (catalogue/spec sheet)'
    ]
  },
  {
    title: 'Internal System',
    items: [
      'Đăng nhập & phân quyền',
      'Dashboard tổng quan',
      'CRM khách hàng & lịch sử chăm sóc',
      'Quản lý RFQ / báo giá / đơn hàng',
      'Quản lý chứng từ thanh quyết toán',
      'Kho vận, QC, giao nhận',
      'Báo cáo doanh số - vận hành - công nợ'
    ]
  }
];

const phases = [
  {
    title: 'Giai đoạn 1 (MVP 6-8 tuần)',
    items: [
      'Website giới thiệu đầy đủ nội dung thương hiệu + sản phẩm',
      'Form liên hệ và form yêu cầu báo giá',
      'RFQ cart cơ bản (không thanh toán online)',
      'Dashboard nội bộ: Lead, RFQ, báo giá, đơn hàng mức cơ bản',
      'Email thông báo tự động cho sales và khách hàng'
    ]
  },
  {
    title: 'Giai đoạn 2 (Sales Ops)',
    items: [
      'Quy trình xử lý đơn hàng 15 trạng thái',
      'Phân quyền chi tiết Admin / Sales / Kế toán / Kho / Quản lý',
      'Quản lý khách hàng nâng cao và lịch sử tương tác',
      'Xuất PDF báo giá, đơn hàng, phiếu giao hàng'
    ]
  },
  {
    title: 'Giai đoạn 3 (Finance & Docs)',
    items: [
      'Module chứng từ: hợp đồng, hóa đơn, phiếu thu, nghiệm thu',
      'Quản lý công nợ, đặt cọc, thanh toán',
      'Xuất báo cáo Excel/PDF theo kỳ'
    ]
  },
  {
    title: 'Giai đoạn 4 (AgriTech Integration)',
    items: [
      'Tích hợp dữ liệu nhà kính/cảm biến (nếu có)',
      'Case study hiệu quả vận hành theo vùng trồng/cây trồng',
      'Portal đối tác/đại lý'
    ]
  },
  {
    title: 'Giai đoạn 5 (Scale & Export)',
    items: [
      'Đa ngôn ngữ (VI/EN)',
      'Quản lý thị trường xuất khẩu, Incoterms, chứng từ xuất khẩu',
      'BI dashboard và dự báo nhu cầu đơn hàng'
    ]
  }
];

const workflow = [
  'Khách gửi yêu cầu',
  'Lead mới',
  'Sales tiếp nhận',
  'Xác minh nhu cầu',
  'Gửi báo giá',
  'Khách xác nhận',
  'Tạo đơn hàng',
  'Tạo hợp đồng/PO',
  'Xác nhận thanh toán/đặt cọc',
  'Chuẩn bị hàng',
  'Kiểm tra chất lượng (QC)',
  'Giao hàng',
  'Xuất hóa đơn/chứng từ',
  'Hoàn tất đơn hàng',
  'Chăm sóc sau bán hàng'
];

const dbGroups = [
  {
    name: 'Master data',
    tables: ['users', 'roles', 'permissions', 'customers', 'products', 'product_specs', 'packaging_options']
  },
  {
    name: 'Sales & CRM',
    tables: ['leads', 'lead_activities', 'rfq_requests', 'rfq_items', 'quotations', 'quotation_items', 'orders', 'order_items']
  },
  {
    name: 'Operations & logistics',
    tables: ['warehouses', 'stock_moves', 'quality_checks', 'shipments', 'delivery_notes']
  },
  {
    name: 'Finance & documents',
    tables: ['contracts', 'invoices', 'receipts', 'payment_transactions', 'documents', 'document_templates']
  },
  {
    name: 'System',
    tables: ['notifications', 'email_logs', 'audit_logs', 'file_attachments', 'settings']
  }
];

const apiList = [
  'POST /api/contact',
  'POST /api/rfq',
  'GET /api/products | GET /api/products/:slug',
  'POST /api/admin/quotations | PATCH /api/admin/quotations/:id/status',
  'POST /api/admin/orders | PATCH /api/admin/orders/:id/status',
  'POST /api/admin/documents/generate (PDF/Excel)',
  'POST /api/auth/login | POST /api/auth/refresh',
  'GET /api/reports/sales | GET /api/reports/operations'
];

const sampleContent = [
  {
    title: 'Trang chủ',
    text: 'GreenPeat mang đến giải pháp giá thể mụn dừa và công nghệ nông nghiệp bền vững cho nhà kính, thủy canh và nông trại công nghệ cao. Với thương hiệu AgriCoX, chúng tôi đảm bảo nguồn nguyên liệu ổn định, quy trình xử lý chuẩn hóa và năng lực đáp ứng cho thị trường nội địa lẫn xuất khẩu.'
  },
  {
    title: 'Giới thiệu GreenPeat',
    text: 'Từ nền tảng sản xuất mụn dừa chất lượng cao, GreenPeat phát triển hệ sinh thái sản phẩm và dịch vụ nông nghiệp hiện đại, tập trung vào chất lượng, hiệu quả canh tác và phát triển bền vững.'
  },
  {
    title: 'Thương hiệu AgriCoX',
    text: 'AgriCoX là dòng sản phẩm cocopeat growbag và giá thể chuyên dụng, được thiết kế để tối ưu độ giữ nước, độ thoáng khí và tính đồng nhất, phù hợp cho nhiều loại cây trồng giá trị cao.'
  },
  {
    title: 'Mô tả Cocopeat Growbag',
    text: 'Growbag AgriCoX có EC/pH được kiểm soát theo tiêu chuẩn, cấu trúc xơ-mụn cân bằng, đóng gói chắc chắn, sẵn sàng sử dụng cho dưa lưới, cà chua, dâu tây, hoa và rau ăn lá.'
  },
  {
    title: 'Mô tả đất mụn dừa xử lý',
    text: 'Đất mụn dừa xử lý GreenPeat trải qua các bước sàng lọc, rửa muối, ổn định EC, kiểm tra độ ẩm và đóng gói theo quy cách linh hoạt, phù hợp cả nhà vườn và trang trại quy mô lớn.'
  },
  {
    title: 'Công nghệ xử lý mụn dừa',
    text: 'Quy trình gồm thu gom nguyên liệu, sàng lọc, rửa, xử lý EC, ủ ổn định, ép/đóng bao và kiểm tra chất lượng đa điểm. Dữ liệu QC được ghi nhận để truy xuất theo lô sản xuất.'
  },
  {
    title: 'Lợi ích cho nhà vườn/trang trại',
    text: 'Tăng năng suất ổn định, tối ưu dinh dưỡng, giảm rủi ro mầm bệnh từ đất, tiết kiệm nước tưới và nâng cao hiệu quả vận hành trong mô hình nông nghiệp công nghệ cao.'
  },
  {
    title: 'CTA bán hàng',
    text: 'Nhận báo giá ngay hôm nay • Đặt hàng theo quy cách phù hợp • Liên hệ tư vấn kỹ thuật 1:1 cùng đội ngũ GreenPeat.'
  }
];

const highLevelPrompt = `Bạn là Solution Architect + Product Owner + UX Lead. Hãy thiết kế hệ thống web app thương mại cho GreenPeat (thương hiệu AgriCoX) theo định hướng: website giới thiệu doanh nghiệp + hệ thống bán hàng B2B + CRM + quản lý chứng từ + hỗ trợ workflow xử lý đơn hàng chuyên nghiệp.\n\nYÊU CẦU ĐẦU RA:\n1) Sitemap tổng thể (public site + internal dashboard).\n2) Kiến trúc hệ thống (frontend, backend, database, storage, email, auth, phân quyền).\n3) Phân chia roadmap triển khai giai đoạn 1→5 (MVP tới mở rộng).\n4) Workflow xử lý đơn hàng đầy đủ từ lead đến hậu mãi.\n5) Database tổng thể ở mức high-level (nhóm bảng + quan hệ chính).\n\nRÀNG BUỘC:\n- Branding: xanh nông nghiệp, nâu mụn dừa, trắng sạch, nhấn cam/vàng.\n- UX: cao cấp, rõ ràng, responsive desktop/tablet/mobile.\n- Business focus: RFQ cart trước, chưa cần thanh toán online ở MVP.\n- Hỗ trợ chứng từ: báo giá, PO, hợp đồng, phiếu xuất kho, biên bản giao nhận, hóa đơn, phiếu thu.\n- Bảo mật và khả năng mở rộng cho thị trường xuất khẩu.`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f8f2] text-[#1f3528]">
      <section className="bg-gradient-to-br from-[#1f7a4d] via-[#2c8a5d] to-[#8c5a2f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">GreenPeat x AgriCoX • High-level blueprint</p>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            Thiết kế tổng thể web app thương mại: Website giới thiệu + Bán hàng B2B + CRM + Quản lý chứng từ
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/90 md:text-lg">
            “Giải pháp giá thể mụn dừa và công nghệ nông nghiệp bền vững” — bộ khung này giúp GreenPeat triển khai đúng ngay từ đầu,
            tránh làm lại kiến trúc khi mở rộng quy mô.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/20 px-4 py-2">Nhận báo giá</span>
            <span className="rounded-full bg-white/20 px-4 py-2">Đặt hàng RFQ</span>
            <span className="rounded-full bg-white/20 px-4 py-2">Liên hệ tư vấn</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-2 lg:px-10">
        {sitemap.map((group) => (
          <article key={group.title} className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#21593d]">{group.title}</h2>
            <ul className="space-y-2 text-sm leading-6 text-[#355646]">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Kiến trúc hệ thống đề xuất</h2>
          <div className="grid gap-4 text-sm leading-6 text-[#355646] md:grid-cols-2">
            <p><strong>Frontend:</strong> Next.js (App Router), TailwindCSS, SEO chuẩn, tốc độ tải tối ưu, i18n sẵn cho mở rộng VI/EN.</p>
            <p><strong>Backend:</strong> NestJS (REST API), RBAC, audit log, queue gửi email/tin nhắn, module chứng từ.</p>
            <p><strong>Database:</strong> PostgreSQL (giao dịch, quan hệ phức tạp), Redis cache cho dashboard/report.</p>
            <p><strong>Storage & tài liệu:</strong> S3-compatible object storage cho chứng từ, catalogue, file đính kèm.</p>
            <p><strong>Authentication:</strong> JWT + refresh token, phân quyền Admin/Sales/Kế toán/Kho/Quản lý.</p>
            <p><strong>Messaging:</strong> SMTP hoặc SendGrid; tùy chọn tích hợp Zalo/WhatsApp/SMS qua provider.</p>
            <p><strong>Reporting:</strong> Export PDF/Excel cho báo giá, đơn hàng, hóa đơn, báo cáo vận hành.</p>
            <p><strong>Security:</strong> mã hóa dữ liệu nhạy cảm, phân quyền theo vai trò, kiểm soát truy cập file.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Roadmap triển khai giai đoạn 1 → 5</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.title} className="rounded-2xl border border-[#d9e4d8] bg-white p-5 shadow-sm">
              <h3 className="mb-3 font-bold text-[#2e6a4a]">{phase.title}</h3>
              <ul className="space-y-1 text-sm text-[#355646]">
                {phase.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Workflow xử lý đơn hàng chuẩn hóa</h2>
          <ol className="grid gap-2 text-sm text-[#355646] md:grid-cols-3">
            {workflow.map((step, index) => (
              <li key={step} className="rounded-lg bg-[#f4faf4] px-3 py-2">
                <strong>{index + 1}.</strong> {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Database tổng thể (high-level)</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dbGroups.map((group) => (
            <article key={group.name} className="rounded-2xl border border-[#d9e4d8] bg-white p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-[#2e6a4a]">{group.name}</h3>
              <p className="text-sm text-[#355646]">{group.tables.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Danh sách API chính</h2>
          <ul className="grid gap-2 text-sm text-[#355646] md:grid-cols-2">
            {apiList.map((api) => (
              <li key={api} className="rounded-lg bg-[#f4faf4] px-3 py-2 font-mono text-xs md:text-sm">{api}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <h2 className="mb-4 text-2xl font-bold text-[#21593d]">Nội dung mẫu tiếng Việt cho website</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {sampleContent.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#d9e4d8] bg-white p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-[#2e6a4a]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#355646]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-[#21593d]">Prompt tổng thể (High-level) — copy để làm việc với AI/dev</h2>
          <pre className="overflow-x-auto rounded-xl bg-[#1f3528] p-4 text-xs leading-6 text-[#f1f9f0] md:text-sm">{highLevelPrompt}</pre>
        </div>
      </section>
    </main>
  );
}
