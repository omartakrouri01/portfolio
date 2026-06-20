from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "omar-takrouri-cv.pdf"


def p(text: str, style: ParagraphStyle):
    return Paragraph(text, style)


def bullets(items: list[str], style: ParagraphStyle):
    return [p(f"- {item}", style) for item in items]


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=29,
        textColor=colors.HexColor("#14212b"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor("#b42318"),
        spaceAfter=7,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontSize=8.8,
        leading=12,
        textColor=colors.HexColor("#4b5563"),
        spaceAfter=12,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=15,
        textColor=colors.HexColor("#14212b"),
        borderColor=colors.HexColor("#d8dde3"),
        borderWidth=0.5,
        borderPadding=(7, 0, 0),
        spaceBefore=10,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        parent=styles["Normal"],
        fontSize=9.2,
        leading=12.7,
        textColor=colors.HexColor("#14212b"),
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="Job",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=13,
        textColor=colors.HexColor("#14212b"),
        spaceBefore=4,
        spaceAfter=2,
    )
)


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=15 * mm,
    leftMargin=15 * mm,
    topMargin=13 * mm,
    bottomMargin=13 * mm,
    title="Omar Takrouri - CV",
    author="Omar Takrouri",
)

story = [
    p("Omar Takrouri", styles["Name"]),
    p("Data & AI Specialist | Business Analytics | Digital Transformation | KPI Strategy", styles["Role"]),
    p(
        "Email: omartakroury@gmail.com | Phone: +963994548586 | LinkedIn: https://www.linkedin.com/in/omar-takrouri/",
        styles["Contact"],
    ),
    p("Professional Summary", styles["Section"]),
    p(
        "Data & AI Specialist with 2+ years of experience in construction-related operations "
        "(elevators, escalators, and moving walkways), specializing in business analytics, KPI architecture, "
        "AI-enabled internal products, and operational decision support.",
        styles["Body"],
    ),
    p(
        "Experienced in translating business challenges into measurable frameworks by designing KPI ecosystems, "
        "building shadow systems alongside ERP platforms, and enabling data-driven decision-making across sales, "
        "installation, planning, quality control, safety, and maintenance operations.",
        styles["Body"],
    ),
    p("Core Capabilities", styles["Section"]),
    p("<b>Business & Analytics:</b> KPI Design & Governance, Business Analysis, Data Storytelling, Executive Reporting, Performance Management, Process Mapping, Data-Driven Decision Making", styles["Body"]),
    p("<b>Data & Technical:</b> Power BI, DAX, SQL, Power Query, Dashboard Design, Data Modeling, Data Validation", styles["Body"]),
    p("<b>AI & Digital Transformation:</b> AI-Assisted Product Development, Workflow Automation, Shadow Systems Design, LLM Integration, Internal Business Applications, Requirements Gathering, Process Optimization", styles["Body"]),
    p("Professional Experience", styles["Section"]),
    p("Data & AI Specialist - KNE (Remote, Iraq)", styles["Job"]),
    p("Jan 2026 - Present", styles["Body"]),
]

story.extend(
    bullets(
        [
            "Designed and developed internal shadow systems to extend ERP capabilities without modifying core ERP processes.",
            "Introduced new operational data capture methods to generate previously unavailable business KPIs.",
            "Used AI-assisted development workflows to accelerate delivery and maintenance of internal business applications.",
            "Built KPI frameworks across sales, installation, planning, quality control, safety, and maintenance operations.",
            "Designed Power BI dashboards and reporting layers to improve decision-making.",
            "Shifted operational discussions from intuition-based decisions toward measurable business performance.",
            "Improved visibility into field execution and maintenance activities.",
        ],
        styles["Body"],
    )
)

story.extend(
    [
        p("Data Analyst - KNE (Remote, Iraq)", styles["Job"]),
        p("Jan 2025 - Dec 2025", styles["Body"]),
    ]
)
story.extend(
    bullets(
        [
            "Developed reporting and KPI solutions for operational departments.",
            "Built data models and dashboards using Power BI.",
            "Supported business teams with analytics and performance insights.",
            "Improved data quality and reporting consistency.",
        ],
        styles["Body"],
    )
)

story.extend(
    [
        p("Selected Projects", styles["Section"]),
        p("<b>Internal Operational Intelligence Platform:</b> Built a supporting internal system to collect additional business data, integrate operational workflows, generate new KPIs, and enable improved management visibility and faster decision-making.", styles["Body"]),
        p("<b>KPI Framework for Service & Installation Operations:</b> Created end-to-end KPI structures covering sales performance, installation execution, quality metrics, safety tracking, and maintenance operations.", styles["Body"]),
        p("Education", styles["Section"]),
        p("Civil Engineering | Sep 2019 - Feb 2024 | Arab International University", styles["Body"]),
        p("Languages", styles["Section"]),
        p("Arabic - Native | English - Professional Working Proficiency", styles["Body"]),
        p("Tools", styles["Section"]),
        p("Power BI | SQL | Excel | DAX | Power Query | AI Platforms | Cloud Tools", styles["Body"]),
        Spacer(1, 2 * mm),
    ]
)

doc.build(story)
print(OUTPUT)
