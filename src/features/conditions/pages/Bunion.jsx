import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import bunionImg from '@/assets/images/bunion.webp'

export function Bunion() {
  return (
    <ConditionDetailTemplate
      slug="bunion"
      title="Bunion"
      heroEyebrow="Orthopedic & Biomechanical Foot Care"
      heroText="Bunions cause the base of your big toe (Metatarsophalangeal Joint) to enlarge and protrude. The skin over it may be red and tender. This can be acquired through time or it can be congenital (you got it from your family). Dr. Celine Soltani provides individualized conservative care to relieve pain, restore comfort, and protect joint alignment."
      overviewImage={bunionImg}
      overviewTitle="Conservative, non-surgical relief for painful big toe bunions."
      description="Bunions cause the base of your big toe (Metatarsophalangeal Joint) to enlarge and protrude. The skin over it may be red and tender. This can be acquired through time or it can be congenital (you got it from your family). A bunion (hallux valgus) develops when the big toe angles inward toward the second toe, forcing the base joint out of alignment. Over time, pressure and friction from footwear create painful bursitis, swelling, and joint stiffness. Dr. Celine Soltani specializes in conservative, non-surgical solutions that alleviate pressure, correct gait mechanics, and keep you walking comfortably."
      causesTitle="Common Causes & Contributing Factors"
      causes={[
        'Congenital foot structure and inherited faulty biomechanics passed down through family genetics',
        'Excessive pronation, flat feet, or ligamentous laxity causing instability at the first metatarsal joint',
        'Wearing tight, narrow, pointed-toe shoes or high heels that squeeze the toes together',
        'Repetitive stress, occupational standing, or inflammatory joint conditions such as arthritis',
      ]}
      symptomsText="Bunions develop progressively and often become increasingly uncomfortable with activity and narrow footwear:"
      symptoms={[
        'Visible bulging bony bump on the outer base of the big toe (MTP joint)',
        'Redness, localized swelling, and tenderness over the prominent joint',
        'Ongoing dull ache or sharp pain when bearing weight or wearing enclosed shoes',
        'Restricted mobility, joint stiffness, or shifting of adjacent smaller toes (hammertoes)',
        'Callus or corn formation where the big toe and second toe rub together',
      ]}
      diagnosis="Evaluation includes a comprehensive physical examination, biomechanical gait analysis, and in-office digital X-rays to assess bone angles and joint integrity."
      treatmentTitle="Targeted Conservative Treatments"
      treatmentText="We emphasize conservative, non-surgical treatments designed to relieve pain, slow bunion progression, and protect joint function:"
      treatments={[
        'Custom functional orthotics to rebalance foot mechanics and offload the big toe joint',
        'Protective gel bunion sleeves, shields, and silicone toe spacers to eliminate friction',
        'Footwear education and recommendations for wide toe-box, supportive shoes',
        'Anti-inflammatory modalities and gentle joint mobilization exercises to maintain flexibility',
        'Night splints and therapeutic taping for symptom relief and alignment support',
      ]}
      advancedTreatmentsTitle="Long-Term Conservative Joint Protection"
      advancedTreatments="Early intervention with custom biomechanical supports and conservative therapy can significantly slow progression, protect joint cartilage, and keep you active without surgery."
      highlights={[
        'In-office digital X-rays and structural joint evaluation',
        'Focus on non-surgical, conservative relief first',
        'Customized orthotics tailored to your feet and daily activities',
        'Long-term joint preservation and lifestyle guidance',
      ]}
    />
  )
}
