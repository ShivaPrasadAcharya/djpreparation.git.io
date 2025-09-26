// data7markdown2.js
window.markdown2Content = `
# Court Jurisdiction Decision Tree
## Nepal Administration of Justice Act, 2073 (Sections 7, 8, & 9)

<pre>
START: Which court has jurisdiction for this case?
│
├─ Is this an appeal from a lower court/body decision?
│   │
│   ├─ YES → Is this an appeal from High Court?
│   │         │
│   │         ├─ YES → SUPREME COURT (Section 9)
│   │         │        - Has appellate jurisdiction
│   │         │
│   │         └─ NO → Is this from District Court?
│   │                 │
│   │                 ├─ YES → Does it involve:
│   │                 │        - 10+ years imprisonment? OR
│   │                 │        - Public/government property? OR
│   │                 │        - Fine > NPR 100,000? OR
│   │                 │        - Claim value > NPR 500,000?
│   │                 │        │
│   │                 │        ├─ YES → HIGH COURT (Section 8)
│   │                 │        │        - Has appellate jurisdiction
│   │                 │        │
│   │                 │        └─ NO → Is the imprisonment 3+ years OR
│   │                 │               fine > NPR 500,000 OR
│   │                 │               claim > NPR 2,500,000?
│   │                 │               │
│   │                 │               ├─ YES → SUPREME COURT (Section 9)
│   │                 │               │        - If High Court reversed/modified
│   │                 │               │
│   │                 │               └─ NO → HIGH COURT (Section 8)
│   │                 │                        - Has appellate jurisdiction
│   │                 │
│   │                 └─ NO → Is this from quasi-judicial body?
│   │                         │
│   │                         ├─ YES → Is it a federal quasi-judicial body?
│   │                         │        │
│   │                         │        ├─ YES → DISTRICT COURT (Section 7)
│   │                         │        │        - Has appellate jurisdiction
│   │                         │        │
│   │                         │        └─ NO → HIGH COURT (Section 8)
│   │                         │                - For provincial/local bodies
│   │                         │
│   │                         └─ NO → CHECK SPECIFIC LAW
│   │
│   └─ NO → Is this an original case (first filing)?
│           │
│           ├─ YES → Is it a constitutional writ petition?
│           │        │
│           │        ├─ YES → Is it under Article 144?
│           │        │        │
│           │        │        ├─ YES → HIGH COURT (Section 8)
│           │        │        │        - Original writ jurisdiction
│           │        │        │
│           │        │        └─ NO → Is it under Article 133?
│           │        │               │
│           │        │               ├─ YES → SUPREME COURT
│           │        │               │        - Original writ jurisdiction
│           │        │               │
│           │        │               └─ NO → CHECK CONSTITUTION
│           │        │
│           │        └─ NO → Is it a habeas corpus within district?
│           │                 │
│           │                 ├─ YES → DISTRICT COURT (Section 7)
│           │                 │        - Can issue habeas corpus
│           │                 │
│           │                 └─ NO → Is it an injunction case within district?
│           │                         │
│           │                         ├─ YES → DISTRICT COURT (Section 7)
│           │                         │        - Can issue injunction
│           │                         │
│           │                         └─ NO → Is federal law assigning it to High Court?
│           │                                 │
│           │                                 ├─ YES → HIGH COURT (Section 8)
│           │                                 │        - As per federal law
│           │                                 │
│           │                                 └─ NO → DISTRICT COURT (Section 7)
│           │                                          - General original jurisdiction
│           │                                          - All types of cases in district
│           │
│           └─ NO → Is this a review (sadhak) petition?
│                   │
│                   ├─ YES → Is it for death sentence case?
│                   │        │
│                   │        ├─ YES → SUPREME COURT (Section 9)
│                   │        │        - Must review death sentences
│                   │        │
│                   │        └─ NO → HIGH COURT (Section 8)
│                   │                - Reviews other cases
│                   │
│                   └─ NO → REFER TO SPECIFIC PROVISIONS

SPECIAL PROVISIONS:

1. TRANSFERRED CASES (Section 8):
   - High Court can pull cases from District Court under Article 145(2)
   - Supreme Court can pull cases from High Court under Article 134

2. TERRITORIAL JURISDICTION:
   - District Court: Within district boundaries
   - High Court: Within provincial boundaries
   - Supreme Court: Entire Nepal

3. CONCURRENT JURISDICTION:
   - Multiple courts may have jurisdiction
   - Higher court's decision prevails
</pre>

## Quick Reference Guide

### SUPREME COURT (Section 9) handles:
- Appeals from High Court original jurisdiction cases
- Appeals with 10+ years imprisonment from High Court
- Appeals exceeding monetary thresholds after High Court reversal
- Death sentence reviews (sadhak)
- Other appeals as per federal law

### HIGH COURT (Section 8) handles:
- Constitutional writs under Article 144
- Appeals from District Court decisions
- Appeals from judicial/quasi-judicial bodies
- Cases assigned by federal law
- Reviews (sadhak) except death sentences
- Appeals involving:
  * Government/public property disputes
  * Fines > NPR 100,000
  * Claims > NPR 500,000

### DISTRICT COURT (Section 7) handles:
- All original cases within district (default jurisdiction)
- Cases assigned by High Court under Article 145(2)
- Habeas corpus within district
- Injunctions within district
- Appeals from federal quasi-judicial bodies
- Appeals from local judicial bodies

# Decision Trees - Nepal Administration of Justice Act 2073

## 1. CASE TRANSFER DECISION TREE (Sections 19-20)
### When can cases be transferred between courts?

<pre>
START: Should this case be transferred?
│
├─ Is the case pending in High Court?
│   │
│   ├─ YES → Does it meet Article 134 criteria?
│   │         │
│   │         ├─ YES → Can Supreme Court pull the case?
│   │         │        │
│   │         │        ├─ Constitutional importance? → YES → TRANSFER TO SUPREME COURT
│   │         │        ├─ Public interest? → YES → TRANSFER TO SUPREME COURT
│   │         │        └─ Legal principle conflict? → YES → TRANSFER TO SUPREME COURT
│   │         │
│   │         └─ NO → Should it move to different High Court?
│   │                 │
│   │                 ├─ Judge impartiality issue? → YES → TRANSFER TO ANOTHER HIGH COURT
│   │                 ├─ Local law & order problem? → YES → TRANSFER TO ANOTHER HIGH COURT
│   │                 └─ Convenience of parties? → YES → TRANSFER TO ANOTHER HIGH COURT
│   │
│   └─ NO → Is it pending in District Court?
│           │
│           ├─ YES → Does High Court want to exercise Article 145(2)?
│           │        │
│           │        ├─ YES → TRANSFER TO HIGH COURT (Section 20)
│           │        │
│           │        └─ NO → Should it move to different District Court?
│           │                 │
│           │                 ├─ Judge bias concerns? → YES → TRANSFER TO ANOTHER DISTRICT
│           │                 ├─ Security issues? → YES → TRANSFER TO ANOTHER DISTRICT
│           │                 └─ Fair trial concerns? → YES → TRANSFER TO ANOTHER DISTRICT
│           │
│           └─ NO → CASE REMAINS IN CURRENT COURT
</pre>

## 2. INSPECTION AUTHORITY TREE (Sections 21-23)
### Who can inspect which courts/bodies?

<pre>
START: Inspection of judicial bodies
│
├─ Who is conducting inspection?
│   │
│   ├─ SUPREME COURT JUDGE → Can inspect:
│   │   │
│   │   ├─ High Courts? → YES (Section 21)
│   │   ├─ District Courts? → YES (Section 21)
│   │   ├─ Judicial bodies? → YES (Section 21)
│   │   └─ Quasi-judicial bodies? → YES (Section 22)
│   │
│   ├─ HIGH COURT JUDGE → Can inspect:
│   │   │
│   │   ├─ District Courts in jurisdiction? → YES (Section 21)
│   │   ├─ Judicial bodies under them? → YES (Section 21)
│   │   └─ Quasi-judicial bodies under them? → YES (Section 22)
│   │
│   └─ DISTRICT COURT JUDGE → Can inspect:
│       │
│       ├─ Lower judicial bodies? → YES (Section 21)
│       └─ Quasi-judicial bodies under them? → YES (Section 21)

TYPE OF INSPECTION:
│
├─ Regular Annual Inspection (Section 21)
│   │
│   ├─ Mandatory? → YES (at least once per year)
│   ├─ Focus on pending cases? → YES
│   ├─ Focus on decided cases? → YES
│   └─ Report required? → YES (to Supreme Court, High Court, Judicial Council)
│
└─ Emergency/Spot Inspection (Section 22)
    │
    ├─ Can be ordered anytime? → YES
    ├─ Prior notice required? → NO
    └─ Report submission? → YES (immediate)
</pre>

## 3. REVIEW & REVISION TREE (Sections 11-12)
### When can court decisions be reviewed or revised?

<pre>
START: Can this decision be reviewed/revised?
│
├─ Is this a Supreme Court decision?
│   │
│   ├─ YES → Review petition (Section 11)?
│   │         │
│   │         ├─ New crucial evidence discovered after decision? → YES → REVIEW POSSIBLE
│   │         ├─ Contradicts established precedent? → YES → REVIEW POSSIBLE
│   │         ├─ Already reviewed once? → NO → CANNOT REVIEW AGAIN
│   │         ├─ From Full Bench? → NO → CANNOT REVIEW
│   │         └─ From Constitutional Bench? → NO → CANNOT REVIEW
│   │
│   └─ NO → Is it eligible for "Dohoriyaune" (Section 12)?
│           │
│           ├─ From High Court with no appeal right?
│           │   │
│           │   ├─ Serious constitutional error? → YES → CAN REQUEST REVIEW
│           │   ├─ Violates Supreme Court precedent? → YES → CAN REQUEST REVIEW
│           │   ├─ Public property case with wrong assessment? → YES → CAN REQUEST REVIEW
│           │   ├─ Involves child/disabled/elderly without representation? → YES → CAN REQUEST REVIEW
│           │   ├─ Already reviewed once? → NO → CANNOT REVIEW
│           │   └─ Time limit (45 days) expired? → NO → CANNOT REVIEW
│           │
│           └─ NO → DECISION IS FINAL
</pre>

## 4. CONTEMPT OF COURT TREE (Section 17)
### Jurisdiction for contempt proceedings

<pre>
START: Contempt of Court Case
│
├─ Which court's order was violated/obstructed?
│   │
│   ├─ SUPREME COURT order/proceeding?
│   │   │
│   │   ├─ YES → Supreme Court can take action for:
│   │   │        ├─ Its own contempt? → YES
│   │   │        ├─ High Court contempt? → YES
│   │   │        └─ District Court contempt? → YES
│   │   │
│   │   └─ Punishment: Up to 1 year prison OR NPR 10,000 fine OR both
│   │
│   ├─ HIGH COURT order/proceeding?
│   │   │
│   │   ├─ YES → High Court can take action for:
│   │   │        ├─ Its own contempt? → YES
│   │   │        ├─ District Court contempt? → YES
│   │   │        └─ Lower judicial body contempt? → YES
│   │   │
│   │   └─ Punishment: Up to 1 year prison OR NPR 10,000 fine OR both
│   │
│   └─ DISTRICT COURT order/proceeding?
│       │
│       ├─ YES → District Court can take action for:
│       │        ├─ Its own contempt? → YES
│       │        └─ Lower judicial body contempt? → YES
│       │
│       └─ Punishment: Up to 1 year prison OR NPR 10,000 fine OR both

CONTEMPT PROCEEDINGS:
│
├─ Can accused apologize? → YES → Court may pardon
├─ Apology before judgment? → YES → Case can be dropped
└─ Apology after punishment? → YES → Punishment may be reduced/waived
</pre>

## 5. PRIORITY CASE HANDLING (Section 28A)
### Order of case priority

<pre>
START: Determine case priority order
│
├─ Person in custody during investigation?
│   ├─ YES → PRIORITY 1 (Highest)
│   └─ NO → Continue ↓
│
├─ Person in detention awaiting trial?
│   ├─ YES → PRIORITY 2
│   └─ NO → Continue ↓
│
├─ Convicted person in prison?
│   ├─ YES → PRIORITY 3
│   └─ NO → Continue ↓
│
├─ Involves disabled person or child?
│   ├─ YES → PRIORITY 4
│   └─ NO → Continue ↓
│
├─ Involves person over 75 years?
│   ├─ YES → PRIORITY 5
│   └─ NO → Continue ↓
│
├─ Violence against women case?
│   ├─ YES → PRIORITY 6
│   └─ NO → Continue ↓
│
├─ Caste discrimination case?
│   ├─ YES → PRIORITY 7
│   └─ NO → Continue ↓
│
├─ Relationship establishment case?
│   ├─ YES → PRIORITY 8
│   └─ NO → Continue ↓
│
├─ Maintenance (food/support) case?
│   ├─ YES → PRIORITY 9
│   └─ NO → Continue ↓
│
├─ Divorce case?
│   ├─ YES → PRIORITY 10
│   └─ NO → Continue ↓
│
├─ Acid attack case?
│   ├─ YES → SPECIAL PRIORITY (regardless of filing date)
│   └─ NO → Continue ↓
│
└─ Regular case → BY DATE OF FILING (first filed, first heard)
</pre>

## 6. INTERIM ORDER APPEAL (Section 15)
### Can interim orders be challenged?

<pre>
START: Interim order issued
│
├─ Type of interim order?
│   │
│   ├─ Detention/Bail/Release order?
│   │   │
│   │   ├─ YES → Can appeal to higher court?
│   │   │        │
│   │   │        ├─ From District Court → Appeal to HIGH COURT
│   │   │        ├─ From High Court → Appeal to SUPREME COURT
│   │   │        └─ For 10+ year imprisonment case → Direct to SUPREME COURT
│   │   │
│   │   └─ Time limit: As per procedural law
│   │
│   └─ Other interim order during proceedings?
│       │
│       ├─ YES → Dissatisfied party can file revision
│       │        │
│       │        ├─ One level higher court has jurisdiction
│       │        ├─ Must show legal error or procedural irregularity
│       │        └─ Cannot be mere disagreement with discretion
│       │
│       └─ NO → Wait for final judgment
</pre>

## 7. HABEAS CORPUS DURING HOLIDAYS (Section 26)
### Special provisions for court holidays

<pre>
START: Court holiday period (3+ days)
│
├─ Is habeas corpus petition needed?
│   │
│   ├─ YES → Where is the detained person?
│   │         │
│   │         ├─ Kathmandu Valley?
│   │         │   └─ Designated Supreme Court Judge handles
│   │         │
│   │         ├─ High Court/District Court location?
│   │         │   └─ Designated High Court Judge handles
│   │         │
│   │         └─ Other District Court area?
│   │             └─ Designated District Judge handles
│   │
│   └─ NO → Wait for regular court days
│
HOLIDAY HABEAS CORPUS:
│
├─ Can issue appropriate orders? → YES
├─ Orders binding during holiday? → YES
├─ Officials must comply? → YES (even on holiday)
└─ Location determined by? → Designated judge
</pre>

## 8. DOCUMENT/EVIDENCE REQUISITION (Section 34)
### Court's power to call for documents

<pre>
START: Court needs documents/evidence
│
├─ Court issues order to produce documents
│   │
│   ├─ Agency complies with order?
│   │   │
│   │   ├─ YES → Proceedings continue
│   │   │
│   │   └─ NO → Did agency comply within deadline?
│   │           │
│   │           ├─ NO → Court can impose fine
│   │           │       ├─ First offense: NPR 1,000-10,000
│   │           │       ├─ Per violation basis
│   │           │       └─ On department head/officer
│   │           │
│   │           └─ Agency explains valid reason?
│   │                   │
│   │                   ├─ YES → Court may waive fine
│   │                   └─ NO → Fine stands + must still comply
│
REQUISITION POWERS:
│
├─ Can order any office? → YES
├─ Can demand explanations? → YES
├─ Can set deadlines? → YES
└─ Binding on all agencies? → YES
</pre>

These decision trees cover the major procedural sections of the Act that involve clear decision-making pathways. Each tree helps navigate through the specific requirements and options available under different circumstances in Nepal's judicial system.

`;
window.markdown2Meta = { name: "decisiontrees", 

  emoji: "📄" };
