import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import diabeticFootDetailImg from '@/assets/images/Diabetic-foot-1024x683.png'

export function DiabeticFootWoundCare() {
  return (
    <ConditionDetailTemplate
      slug="diabetic-foot-wound-care"
      title="Diabetic Foot & Wound Care"
      heroText="Diabetes, neuropathy, circulation problems, and other medical conditions can increase the risk of foot complications. Dr. Soltani provides evaluation, preventive foot care, and wound treatment for general podiatry patients age 16 and older."
      overviewEyebrow="Protecting the Health of Your Feet"
      overviewTitle="Comprehensive, individualized treatment for lasting comfort."
      overviewImage={diabeticFootDetailImg}
      description="Diabetes, neuropathy, circulation problems, and other medical conditions can increase the risk of foot complications. Dr. Soltani provides evaluation, preventive foot care, and wound treatment for general podiatry patients age 16 and older."
      symptomsText="Our proactive diabetic foot care and clinical evaluations include:"
      symptoms={[
        'Skin and nail evaluation',
        'Evaluation of pressure areas and irritation',
        'Nail and callus care when appropriate',
        'Monitoring of wounds or areas of concern',
        'Evaluation of numbness, burning, or tingling',
        'Foot-care education',
      ]}
      treatmentTitle="Foot Wounds & Ulcers"
      treatmentText="Foot wounds are not limited to patients with diabetes. Care may include evaluation, appropriate dressings, pressure reduction, monitoring, and other treatment based on the wound and underlying medical factors."
      treatments={[
        'Thorough clinical evaluation of the wound and underlying medical factors',
        'Selection and application of appropriate advanced medical dressings',
        'Targeted pressure reduction and specialized offloading protocols',
        'Consistent monitoring to promote healthy wound closure and healing',
      ]}
      advancedTreatmentsTitle="Wound Debridement"
      advancedTreatments="When medically appropriate, wound debridement can be performed in the office. Debridement involves removing unhealthy or nonviable tissue from a wound to assist with wound management and allow the area to be properly evaluated and treated. The need for debridement depends on the type and condition of the wound."
      highlights={[
        'A new or worsening wound',
        'Redness or swelling',
        'Drainage or discharge',
        'A blister or sore that is not improving',
        'A change in color or appearance',
        'An injury that may not have been felt because of neuropathy',
      ]}
    />
  )
}
