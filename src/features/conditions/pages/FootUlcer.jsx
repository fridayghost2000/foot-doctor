import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import footUlcerImg from '@/assets/images/Foot Ulcer.png'

export function FootUlcer() {
  return (
    <ConditionDetailTemplate
      slug="foot-ulcer"
      title="Foot Ulcer"
      heroEyebrow="Advanced Diabetic & Wound Management"
      heroText="Foot ulcers are often caused by diabetic neuropathy or vascular disease. Any common foot problems in diabetic people can lead to a serious infection. If not properly treated, diabetic foot complications can lead to amputation and an obviously drastic change in associated lifestyle."
      overviewImage={footUlcerImg}
      overviewTitle="Meticulous, evidence-based clinical wound care and limb preservation."
      description="Foot ulcers are often caused by diabetic neuropathy or vascular disease. Any common foot problems in diabetic people can lead to a serious infection. If not properly treated, diabetic foot complications can lead to amputation and an obviously drastic change in associated lifestyle. Wearing proper shoes is also crucial to preventing serious foot conditions. Foot ulcers are open sores or full-thickness skin breakdowns that commonly develop under high-pressure areas of the foot. Because neuropathy reduces pain sensation, minor friction or a blister can go unnoticed and quickly escalate. Dr. Celine Soltani offers advanced, attentive wound care focused on sterile debridement, infection prevention, pressure offloading, and rapid tissue healing."
      causesTitle="Key Causes & Risk Factors"
      causes={[
        'Diabetic peripheral neuropathy causing loss of protective sensation (inability to feel pain, heat, or pressure)',
        'Peripheral arterial disease (PAD) and poor vascular circulation reducing oxygen and nutrient delivery to tissues',
        'Repetitive friction, pressure, or minor blisters from unsupportive or ill-fitting shoes',
        'Untreated corns, calluses, or minor skin cracks that break down under weight-bearing pressure',
        'Structural foot deformities (bunions, hammertoes, Charcot foot) creating focal high-pressure zones',
      ]}
      symptomsText="Immediate clinical evaluation is critical at the first sign of skin breakdown or discoloration:"
      symptoms={[
        'Open sore, shallow crater, or skin break on the ball of the foot, heel, or underside of toes',
        'Drainage, clear fluid, or blood staining on socks and inside footwear',
        'Redness, localized swelling, warmth, or foul odor indicating potential infection',
        'Thick ring of calloused skin surrounding an open wound base',
        'Blackened, devitalized tissue (eschar) or deep tissue exposure',
      ]}
      diagnosis="Comprehensive clinical evaluation including vascular pulse checks, protective monofilament sensory testing, wound staging, and in-office digital X-rays to assess bone involvement."
      treatmentTitle="Targeted Wound Healing & Offloading Protocols"
      treatmentText="Dr. Soltani applies proven wound care protocols to accelerate tissue regeneration and prevent complications:"
      treatments={[
        'Gentle, sterile in-office surgical debridement to remove non-viable necrotic tissue and stimulate fresh cell growth',
        'Advanced medical barrier dressings, antimicrobial gels, and specialized collagen/alginate wraps',
        'Targeted pressure offloading using therapeutic boots, total contact casts, or custom orthotic relief pads',
        'Prescription diabetic therapeutic footwear and custom molded protective insoles',
        'Frequent clinical monitoring, infection surveillance, and preventive home-care protocols',
      ]}
      advancedTreatmentsTitle="Advanced Limb Preservation & Healing Technologies"
      advancedTreatments="We employ specialized wound dressings and pressure-relieving offloading strategies that optimize the healing environment, prevent recurrent breakdown, and safeguard long-term mobility."
      highlights={[
        'Attentive, urgent clinical wound assessment',
        'Sterile in-office debridement and advanced dressings',
        'Dedicated pressure offloading & limb preservation focus',
        'Prescription diabetic footwear fitting & preventive education',
      ]}
    />
  )
}
