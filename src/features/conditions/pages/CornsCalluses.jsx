import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import cornsCallusesImg from '@/assets/images/Corns & Calluses.webp'

export function CornsCalluses() {
  return (
    <ConditionDetailTemplate
      slug="corns-calluses"
      title="Corns & Calluses"
      heroEyebrow="Gentle In-Office Skin & Callus Care"
      heroText="Corns & Calluses are both hardened areas of skin, or hyperkeratosis, caused by pressure. Both corns and calluses are considered a defense mechanism of the body. That particular area of skin hardens because it is constantly being irritated. It may be from an abnormal gait, ill fitting shoes or repetitive type occupations. Dr. Celine Soltani provides safe, sterile clinical reduction and lasting pressure relief."
      overviewImage={cornsCallusesImg}
      overviewTitle="Safe, sterile clinical treatment for painful corns and stubborn calluses."
      description="Corns & Calluses are both hardened areas of skin, or hyperkeratosis, caused by pressure. Both corns and calluses are considered a defense mechanism of the body. That particular area of skin hardens because it is constantly being irritated. It may be from an abnormal gait, ill fitting shoes or repetitive type occupations. While calluses form broad, flat thickened areas on the soles or heels, corns develop concentrated, conical hard centers over bony prominences that press directly into sensitive nerve endings. Dr. Celine Soltani provides gentle, sterile in-office reduction and addresses the underlying biomechanical pressure points to prevent recurrence."
      causesTitle="Common Causes & Mechanical Pressure Points"
      causes={[
        'Repetitive friction and shearing pressure from tight, narrow, or unsupportive footwear',
        'Abnormal gait patterns and uneven pressure distribution across the ball or heel of the foot',
        'Underlying structural bone prominences such as bunions, hammertoes, or bone spurs',
        'Occupations involving prolonged standing, repetitive walking on hard surfaces, or athletic friction',
        'Thinning natural fat pad cushioning or loss of skin elasticity with age',
      ]}
      symptomsText="Symptoms range from dry, rough patches to severe, pinpoint discomfort under direct pressure:"
      symptoms={[
        'Thick, hardened, yellowish patches of skin on the heel, ball of the foot, or sides of toes',
        'Hard, raised conical bumps on top of or between toes (corns) that hurt when pressed',
        'Burning, throbbing sensation during prolonged walking or standing',
        'Flaky, dry, or cracked skin borders that can develop into painful fissures',
        'Discomfort and difficulty wearing normal enclosed shoes',
      ]}
      diagnosis="Clinical podiatric examination to evaluate pressure distribution, inspect structural alignment, and differentiate corns from viral plantar warts."
      treatmentTitle="Targeted In-Office Clinical Care"
      treatmentText="Dr. Soltani provides painless, sterile medical reduction combined with protective offloading solutions:"
      treatments={[
        'Gentle, sterile in-office clinical debridement to painlessly pare down hardened hyperkeratosis and remove the corn core',
        'Custom silicone toe protectors, digital sleeves, and pressure-relieving offloading pads',
        'Medical-grade keratolytic urea moisturizers to soften tough skin and restore elasticity',
        'Custom orthotics to redistribute ground reaction forces evenly and eliminate focal pressure spots',
        'Personalized footwear recommendations to prevent friction and protect sensitive toe joints',
      ]}
      advancedTreatmentsTitle="Specialized & Diabetic Skin Protection"
      advancedTreatments="Never attempt to cut, shave, or use harsh medicated acid pads on corns and calluses at home. Professional sterile podiatric reduction prevents tissue damage, ulceration, and serious infection, especially for diabetic or neuropathy patients."
      highlights={[
        'Painless, sterile in-office clinical debridement',
        'Essential preventative care for diabetic and neuropathy patients',
        'Accurate differentiation from plantar warts',
        'Personalized offloading padding and custom orthotics',
      ]}
    />
  )
}
