import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import neuropathyDetailImg from '@/assets/images/Neuropathy-1-1024x683.png'

export function NeuropathyTreatment() {
  return (
    <ConditionDetailTemplate
      slug="neuropathy-treatment"
      title="Neuropathy Treatment"
      heroText="Neuropathy can cause uncomfortable or reduced sensation in the feet. Dr. Soltani evaluates nerve-related foot symptoms in general podiatry patients age 16 and older."
      overviewImage={neuropathyDetailImg}
      description="Neuropathy can cause uncomfortable or reduced sensation in the feet. Dr. Soltani evaluates nerve-related foot symptoms in general podiatry patients age 16 and older."
      symptomsText="Common possible signs and sensations associated with neuropathy include:"
      symptoms={[
        'Burning sensation',
        'Tingling or pins-and-needles sensation',
        'Numbness',
        'Heightened sensitivity to light touch',
        'Shooting or electric-type discomfort',
        'Reduced temperature or pressure sensation',
        'Balance difficulties or unsteadiness',
        'Symptoms that may be worse at night',
      ]}
      procedureSection={{
        title: 'Why Foot Care Is Important',
        text: 'Reduced sensation can make it easier to overlook blisters, pressure areas, wounds, or injuries. Patients with neuropathy should monitor their feet carefully, especially when diabetes or circulation problems are also present.',
      }}
      treatmentTitle="Evaluation & Treatment"
      treatmentText="Treatment is individualized based on symptoms, examination, medical history, and possible underlying causes. Further evaluation or coordination with another healthcare professional may be recommended when appropriate."
      treatments={[
        'Comprehensive neurological threshold and sensory testing',
        'Targeted symptom relief protocols and protective footwear guidance',
        'Custom orthotics and specialized cushioning to offload high-pressure spots',
        'Collaborative care and coordination with other healthcare professionals when appropriate',
      ]}
      advancedTreatmentsTitle="Advanced Non-Surgical Treatment Options"
      advancedTreatments="In addition to traditional approaches to neuropathy care, advanced non-surgical treatment options may be available for selected patients. Treatment recommendations are individualized based on symptoms, examination, medical history, and the possible underlying cause of the neuropathy. Dr. Soltani will discuss appropriate treatment options after evaluation."
      alertNotice="Patients with neuropathy, diabetes, or circulation issues should practice daily foot inspections to catch unnoticed blisters or skin changes early."
      highlights={[
        'Patients age 16 and older welcome',
        'Detailed evaluation of nerve-related symptoms',
        'Customized non-invasive symptom management',
        'Focus on foot protection, sensory monitoring, and fall prevention',
      ]}
    />
  )
}
