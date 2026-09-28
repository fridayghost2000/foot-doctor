import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import ingrownNailDetailImg from '@/assets/images/Ingrown-nail-1024x577.jpg'

export function IngrownToenailTreatment() {
  return (
    <ConditionDetailTemplate
      slug="ingrown-toenail-treatment"
      title="Ingrown Toenail Treatment"
      heroText="An ingrown toenail can cause pain, redness, swelling, tenderness, and sometimes infection. Dr. Soltani provides evaluation and treatment for general podiatry patients age 16 and older."
      overviewImage={ingrownNailDetailImg}
      description="An ingrown toenail can cause pain, redness, swelling, tenderness, and sometimes infection. Dr. Soltani provides evaluation and treatment for general podiatry patients age 16 and older."
      symptoms={[
        'Redness, tenderness, and throbbing along nail borders',
        'Swelling and warmth around the toe',
        'Pain when wearing closed-toe shoes or under blanket pressure',
        'Signs of localized infection or drainage',
      ]}
      treatmentTitle="Treatment Options"
      treatmentText="Treatment depends on the severity, infection, recurrence, and shape of the nail."
      treatments={[
        'Conservative treatment when appropriate',
        'B/S Nail Brace for selected patients',
        'In-office ingrown toenail procedures when medically appropriate',
      ]}
      advancedTreatmentsTitle="B/S Nail Brace"
      advancedTreatments="For selected patients, a small, discreet B/S Nail Brace can be applied to the nail surface to help reduce excessive nail curvature and pressure along the sides of the nail."
      procedureSection={{
        title: 'When a Nail Procedure May Be Needed',
        text: 'Painful, infected, severe, or recurring ingrown toenails may require an in-office nail procedure. Dr. Soltani will evaluate the condition and discuss the appropriate treatment.',
      }}
      alertNotice="Patients with diabetes, neuropathy, circulation problems, or signs of infection should seek prompt evaluation."
      highlights={[
        'Patients age 16 and older welcome',
        'Immediate in-office pressure and pain relief',
        'Non-invasive B/S Nail Brace options available',
        'Preventative care to stop recurring issues',
      ]}
    />
  )
}
