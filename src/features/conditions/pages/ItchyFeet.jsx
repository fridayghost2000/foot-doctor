import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import itchyFeetImg from '@/assets/images/Itchy Feet.jfif'

export function ItchyFeet() {
  return (
    <ConditionDetailTemplate
      slug="itchy-feet"
      title="Itchy Feet"
      heroEyebrow="Clinical Dermatological Foot & Skin Care"
      heroText="Athlete’s foot usually begins with some form of perspiration happening between the toes while a person is wearing especially tight fitting shoes and socks. It is highly contagious and can be spread through contact with contaminated flooring, towels, and even clothing. It is indeed a fairly common foot problem, but it can range in its form of severity, from mild to quite problematic when skin between the toes may actually peel and crack. Dr. Celine Soltani provides accurate diagnosis and targeted clinical relief."
      overviewImage={itchyFeetImg}
      overviewTitle="Targeted medical solutions for Athlete’s foot and persistent itchy feet."
      description="Athlete’s foot usually begins with some form of perspiration happening between the toes while a person is wearing especially tight fitting shoes and socks. It is highly contagious and can be spread through contact with contaminated flooring, towels, and even clothing. It is indeed a fairly common foot problem, but it can range in its form of severity, from mild to quite problematic when skin between the toes may actually peel and crack. While tinea pedis (Athlete's foot) is the most frequent culprit, other dermatological conditions such as allergic contact dermatitis, xerosis (severe dry skin), dyshidrotic eczema, or hyperhidrosis produce similar discomfort. Dr. Celine Soltani accurately identifies the root cause and provides prescription-grade treatments to restore clear, healthy, and itch-free skin."
      causesTitle="Causes & How Athlete’s Foot Spreads"
      causes={[
        'Perspiration and moisture accumulation between the toes inside tight, non-breathable footwear and socks',
        'Direct contact with dermatophyte fungal spores (Trichophyton rubrum or interdigitale)',
        'Indirect transmission from walking barefoot in wet communal environments (locker rooms, showers, gym floors, and pool decks)',
        'Sharing towels, socks, shoes, bath mats, or personal grooming tools with an infected individual',
        'Excessive foot sweating (hyperhidrosis) or compromised skin moisture barrier',
      ]}
      symptomsText="Symptoms can range from mild annoyance to severely inflamed and cracked skin:"
      symptoms={[
        'Intense itching, burning, or stinging sensation between the toes or along the soles and arches',
        'Whitened, soggy (macerated), peeling, or flaking skin in toe web spaces',
        'Deep, painful fissures and cracks that may bleed or sting when walking',
        'Dry, scaly, moccasin-type rash spreading along the heels and sides of the feet',
        'Tiny, itchy fluid-filled blisters (vesicular type) along the instep or sides of toes',
        'Unpleasant foot odor and heightened skin sensitivity',
      ]}
      diagnosis="Clinical dermatological examination and differential diagnosis to distinguish fungal tinea pedis from contact allergies, psoriasis, eczema, or secondary bacterial infections."
      treatmentTitle="Targeted In-Office & Prescription Therapies"
      treatmentText="Dr. Soltani prescribes targeted, medical-grade treatments to rapidly calm intense itching and eliminate fungal pathogens:"
      treatments={[
        'Prescription-strength topical antifungal creams, sprays, lotions, and targeted washes',
        'Oral antifungal medications for severe, stubborn, or recurring widespread infections',
        'Medical barrier-repair creams and keratolytic ointments to heal deep cracks and fissures',
        'Clinical hyperhidrosis and moisture management protocols (antiperspirants & moisture-wicking sock guidelines)',
        'Footwear antifungal sanitization and household hygiene strategies to prevent reinfection',
      ]}
      advancedTreatmentsTitle="Specialized Clinical Dermatological Care"
      advancedTreatments="Over-the-counter creams often only suppress surface symptoms, leading to chronic recurrence or spread to the toenails (fungal nail infection). Professional diagnosis ensures precise medical eradication and healthy skin barrier restoration."
      highlights={[
        'Accurate clinical diagnosis of fungal vs. non-fungal conditions',
        'Prescription-grade therapies for stubborn, severe itching and cracked skin',
        'Targeted strategies to prevent spreading to toenails and family members',
        'Comprehensive moisture control and preventative hygiene education',
      ]}
    />
  )
}
