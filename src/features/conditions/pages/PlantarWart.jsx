import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import plantarWartImg from '@/assets/images/plantar wart.png'

export function PlantarWart() {
  return (
    <ConditionDetailTemplate
      slug="plantar-wart"
      title="Plantar Wart Treatment"
      heroEyebrow="Specialty Podiatry & Skin Care"
      heroText="A plantar wart is a small skin growth caused by the virus, HPV or human papillomavirus. Since they are caused by a virus, they can be spread, directly or indirectly. Dr. Celine Soltani provides safe, effective, and gentle in-office evaluation and targeted treatments."
      overviewImage={plantarWartImg}
      overviewTitle="Safe, effective clinical care for stubborn plantar warts."
      description="A plantar wart is a small skin growth caused by the virus, HPV or human papillomavirus. Since they are caused by a virus, they can be spread, directly or indirectly. Plantar warts typically develop on the weight-bearing areas of the sole (the plantar surface), such as the heels or the balls of the feet. Because standing and walking push the lesion inward beneath a thick layer of hard skin, over-the-counter remedies frequently fail to reach the root. Dr. Celine Soltani offers specialized in-office treatments to safely eliminate the viral lesion, protect surrounding skin, and restore comfortable walking."
      causesTitle="Causes & How Plantar Warts Spread"
      causes={[
        'Human papillomavirus (HPV) entering through tiny cuts, scrapes, or cracked skin',
        'Direct skin-to-skin contact with an active wart',
        'Indirect transmission via contaminated surfaces (locker rooms, public pool decks, showers, or gym floors)',
        'Sharing socks, shoes, towels, or nail care tools with an infected individual',
        'Weakened skin moisture barrier, micro-trauma, or excessive foot perspiration (hyperhidrosis)',
      ]}
      symptomsText="Plantar warts can cause sharp, pinpoint discomfort and alter normal gait mechanics:"
      symptoms={[
        'Small, fleshy, rough, or grainy lesion on the sole of the foot or underside of toes',
        'Pinpoint black dots (often called “wart seeds”), which are tiny clotted blood vessels',
        'Tenderness or sharp discomfort when squeezing the sides of the bump or bearing weight',
        'Hard, thickened callous-like skin overlaying a well-defined boundary',
        'Interruption of normal natural skin lines and ridges around the growth',
      ]}
      diagnosis="Evaluation includes a comprehensive visual examination and gentle superficial trimming to accurately differentiate plantar warts from corns, calluses, or foreign bodies."
      treatmentTitle="Targeted Treatment Options"
      treatmentText="Dr. Soltani utilizes proven clinical protocols to eliminate viral tissue and stimulate your body’s natural immune response without unnecessary tissue damage:"
      treatments={[
        'Clinical-grade cryotherapy (targeted, controlled freezing of viral tissue)',
        'Prescription topical therapies, keratolytics, and immune-modulating medications',
        'Painless clinical debridement of overlying hyperkeratosis to reach the viral core',
        'Custom offloading pads to instantly relieve pressure and discomfort while walking',
        'Comprehensive hygiene and footwear sanitation protocols to stop spreading to family members',
      ]}
      advancedTreatmentsTitle="Advanced In-Office Clinical Solutions"
      advancedTreatments="For persistent, deep, or recurring plantar warts, individualized multi-modality therapies are available to eliminate resistant viral cells while promoting fast, healthy skin healing."
      highlights={[
        'General podiatry patients age 16 and older welcome',
        'Accurate clinical differentiation from corns and calluses',
        'Safe, gentle in-office medical treatments',
        'Comprehensive prevention guidance to prevent recurrence and spread',
      ]}
    />
  )
}

