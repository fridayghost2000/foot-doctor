import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import tendonPainDetailImg from '@/assets/images/Tendon-pain-1024x683.png'

export function TendonPainInjuries() {
  return (
    <ConditionDetailTemplate
      slug="treatment-for-tendon-pain-injuries"
      title="Treatment for Tendon Pain & Injuries"
      heroText="Tendons support movement and stability of the foot and ankle. Tendon problems can develop gradually from overuse or degeneration or occur suddenly after an injury. Dr. Soltani evaluates and treats tendon and soft-tissue conditions with an emphasis on conservative care."
      overviewImage={tendonPainDetailImg}
      description="Tendons support movement and stability of the foot and ankle. Tendon problems can develop gradually from overuse or degeneration or occur suddenly after an injury. Dr. Soltani evaluates and treats tendon and soft-tissue conditions with an emphasis on conservative care."
      symptomsText="Posterior tibial tendon dysfunction and tendon injuries can contribute to arch flattening or adult-acquired flatfoot deformity. Common signs and symptoms include:"
      symptoms={[
        'Pain or swelling along the inside of the ankle or foot',
        'Difficulty walking, standing, or pushing off during strides',
        'Weakness along the arch and ankle joint',
        'Progressive flattening of the arch or a visible change in foot shape',
        'Achilles tendon pain, stiffness, swelling, or tenderness behind the heel',
        'Sudden pain, weakness, swelling, or loss of function from a tendon tear',
      ]}
      causesTitle="Other Tendon & Soft-Tissue Conditions"
      causes={[
        'Other forms of tendinitis',
        'Ligament injuries',
        'Sprains',
        'Overuse injuries',
        'Sports-related injuries',
        'Chronic soft-tissue pain',
      ]}
      procedureSection={{
        title: 'Posterior Tibial Tendonitis, Achilles & Tendon Tears',
        text: 'The posterior tibial tendon is a major support of the arch. It can become inflamed, weakened, or torn and is particularly important to evaluate in middle-aged and older adults. Achilles tendon problems cause pain and stiffness behind the heel. Tendon tears may be partial or complete — sudden pain, weakness, difficulty walking, or loss of function should be evaluated promptly.',
      }}
      treatmentTitle="Evaluation & Treatment"
      treatmentText="Treatment depends on the tendon involved, severity, duration, and examination findings. Many tendon and soft-tissue conditions can be managed conservatively. Imaging or referral may be recommended when needed."
      treatments={[
        'Comprehensive physical examination and functional biomechanical assessment',
        'Digital imaging review (in-office X-rays or referral for advanced MRI)',
        'Activity modification, therapeutic strapping, and immobilization support',
        'Custom orthotics, arch supportive devices, and guided rehabilitation',
      ]}
      advancedTreatmentsTitle="Advanced Non-Surgical Treatment Options"
      advancedTreatments="In addition to traditional conservative care, advanced non-surgical treatment options may be available for selected patients. Treatment recommendations are individualized based on the condition, examination, medical history, and treatment goals."
      alertNotice="Don’t Ignore a Changing Foot Shape: Pain along the inside of the ankle, weakness, or progressive flattening of the arch can be associated with posterior tibial tendon dysfunction and should be evaluated promptly."
      highlights={[
        'Evaluation for overuse, degeneration & acute tendon injuries',
        'Emphasis on conservative, non-surgical care',
        'Advanced non-surgical treatment options available for selected patients',
        'Individualized recovery plan and safe return to activities',
      ]}
    />
  )
}
