import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import footAndAnkleImg from '@/assets/images/Foot-and-ankle-1024x683.png'

export function FootAnkleConditions() {
  return (
    <ConditionDetailTemplate
      slug="foot-ankle-conditions"
      title="Foot & Ankle Conditions"
      heroText="Individualized evaluation and conservative care for a wide range of foot and ankle conditions for general podiatry patients age 16 and older."
      // heroImage={/* Pass custom hero image if you want to override default doctor image */}
      overviewImage={footAndAnkleImg}
      description="Dr. Celine Soltani provides evaluation and treatment for a wide range of foot and ankle conditions for general podiatry patients age 16 and older. Treatment is individualized, with an emphasis on conservative care whenever appropriate. In addition to traditional conservative care, advanced non-surgical treatment options may be available for selected patients. Treatment recommendations are individualized based on the condition, examination, medical history, and treatment goals."
      symptoms={[
        'Foot, arch, heel, or ankle discomfort affecting daily mobility',
        'Joint stiffness, swelling, or limited range of motion',
        'Structural discomfort, bunions, hammertoes, or flatfoot strain',
        'Skin, nail, or nerve irritation affecting everyday comfort',
      ]}
      treatments={[
        'Comprehensive biomechanical and clinical examination',
        'Gentle in-office conservative care & alignment modalities',
        'Advanced non-surgical treatment options for selected patients',
        'Custom orthotics, footwear guidance & long-term preventative care',
      ]}
      highlights={[
        'Patients age 16 and older welcome',
        'Emphasis on conservative care whenever appropriate',
        'Advanced non-surgical treatment options available',
        'Individualized recommendations based on examination & goals',
      ]}
    />
  )
}
