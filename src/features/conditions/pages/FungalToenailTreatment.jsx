import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import fungalNailsDetailImg from '@/assets/images/Fungal-nails-1024x683.png'

export function FungalToenailTreatment() {
  return (
    <ConditionDetailTemplate
      slug="fungal-toenail-treatment"
      title="Fungal Toenail Treatment"
      heroText="Dr. Celine Soltani evaluates and treats fungal and abnormal toenails at Foot Doctor of Delray. Not every thick or discolored toenail is caused by fungus, so proper evaluation can be important before beginning treatment."
      overviewImage={fungalNailsDetailImg}
      description="Dr. Celine Soltani evaluates and treats fungal and abnormal toenails at Foot Doctor of Delray. Not every thick or discolored toenail is caused by fungus, so proper evaluation can be important before beginning treatment."
      symptomsText="Common possible signs of fungal or abnormal nails include:"
      symptoms={[
        'Yellow, white, or brown discoloration',
        'Thickened nails',
        'Brittle or crumbly nails',
        'Distorted nail shape',
        'Nails that are difficult to trim',
        'Discomfort',
        'Separation of the nail from the nail bed',
      ]}
      causesTitle="Risk Factors"
      causes={[
        'Athlete’s foot or fungal skin infections',
        'Moist environments or prolonged damp footwear',
        'Nail injury or repetitive micro-trauma',
        'Increasing age',
        'Diabetes or reduced peripheral circulation',
        'Certain underlying medical conditions',
        'Exposure in communal locker rooms or pool areas',
      ]}
      treatmentTitle="Treatment"
      treatmentText="Treatment depends on the diagnosis, severity, and medical history. Topical treatment may be an effective option for appropriate patients, particularly when treatment is started early. Other treatment may include oral medication, professional nail care, or other appropriate options."
      treatments={[
        'Comprehensive evaluation to differentiate fungus from other nail conditions',
        'Topical prescription therapies for early and suitable stages',
        'Prescription oral treatments when medically appropriate',
        'Gentle in-office clinical nail thinning and debridement',
      ]}
      advancedTreatmentsTitle="Specialized Clinical Care"
      advancedTreatments="Medical nail care is also available through our Certified Medical Nail Technician."
      highlights={[
        'Keeping feet clean and thoroughly dry',
        'Changing socks regularly throughout the day',
        'Using protective footwear in communal areas',
        'Treating athlete’s foot proactively',
        'Avoiding shared nail clippers and instruments',
      ]}
    />
  )
}
