import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import heelPainDetailImg from '@/assets/images/Heel-pain-1024x1000.jpg'

export function HeelPainPlantarFasciitis() {
  return (
    <ConditionDetailTemplate
      slug="heel-pain-plantar-fasciitis"
      title="Heel Pain & Plantar Fasciitis"
      heroText="Heel pain is common, but the cause is not always the same. Dr. Soltani evaluates heel pain in general podiatry patients age 16 and older and develops an individualized treatment plan."
      overviewImage={heelPainDetailImg}
      description="Heel pain is common, but the cause is not always the same. Dr. Soltani evaluates heel pain in general podiatry patients age 16 and older and develops an individualized treatment plan."
      causesTitle="Possible Causes of Heel Pain"
      causes={[
        'Plantar fasciitis',
        'Overuse or repetitive stress',
        'Changes in activity',
        'Tight calf muscles',
        'Foot structure or mechanics',
        'Heel spurs',
        'Tendon problems',
        'Arthritis',
        'Injury or stress fracture',
        'Soft-tissue or nerve conditions',
      ]}
      symptomsText="Pain may occur on the bottom of the heel, with the first steps in the morning, after sitting, during prolonged standing or walking, or after increased activity."
      symptoms={[
        'Pain on the bottom of the heel',
        'Pain with the first steps in the morning',
        'Pain after sitting or periods of rest',
        'Discomfort during prolonged standing or walking',
        'Ache after increased physical activity',
      ]}
      diagnosis="Evaluation includes a history and physical examination. In-office X-rays may be used when appropriate."
      treatmentText="Treatment may include activity modification, stretching or therapeutic exercises, supportive footwear, padding or strapping, supportive devices, medications, injections, and other individualized conservative treatments."
      treatments={[
        'Activity modification and rest guidance',
        'Stretching and therapeutic exercise protocols',
        'Supportive footwear and padding or strapping',
        'Supportive devices and custom orthotics',
        'Medications, injections, and individualized conservative therapies',
      ]}
      advancedTreatments="In addition to traditional conservative care, advanced non-surgical treatment options may be available for selected patients. Treatment recommendations are individualized based on the condition, examination, medical history, and treatment goals."
      highlights={[
        'General podiatry patients age 16 and older welcome',
        'In-office X-rays and comprehensive physical examination',
        'Personalized conservative care first approach',
        'Advanced non-surgical treatment options for selected patients',
      ]}
    />
  )
}
