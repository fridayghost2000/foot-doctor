import { Routes, Route, Navigate } from 'react-router-dom'

// Existing pages
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ConditionsPage } from '@/pages/ConditionsPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { TreatmentsServicesPage } from '@/pages/TreatmentsServicesPage'
import { BSNailBracePage } from '@/pages/BSNailBracePage'
import { MedicalNailCarePage } from '@/pages/MedicalNailCarePage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { NewPatientsPage } from '@/pages/NewPatientsPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

// Feature: Condition pages
import {
  FootAnkleConditions,
  HeelPainPlantarFasciitis,
  IngrownToenailTreatment,
  FungalToenailTreatment,
  DiabeticFootWoundCare,
  TendonPainInjuries,
  NeuropathyTreatment,
  PlantarWart,
  Bunion,
  CornsCalluses,
  FootUlcer,
  FlatFoot,
  ItchyFeet,
} from '@/features/conditions'

export function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* About */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/" element={<AboutPage />} />

      {/* Conditions overview listing page */}
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/conditions/" element={<ConditionsPage />} />

      {/* Individual condition detail pages — each has its own file */}
      <Route path="/foot-ankle-conditions" element={<FootAnkleConditions />} />
      <Route path="/foot-ankle-conditions/" element={<FootAnkleConditions />} />

      <Route path="/heel-pain-plantar-fasciitis" element={<HeelPainPlantarFasciitis />} />
      <Route path="/heel-pain-plantar-fasciitis/" element={<HeelPainPlantarFasciitis />} />

      <Route path="/ingrown-toenail-treatment" element={<IngrownToenailTreatment />} />
      <Route path="/ingrown-toenail-treatment/" element={<IngrownToenailTreatment />} />

      <Route path="/fungal-toenail-treatment" element={<FungalToenailTreatment />} />
      <Route path="/fungal-toenail-treatment/" element={<FungalToenailTreatment />} />

      <Route path="/diabetic-foot-wound-care" element={<DiabeticFootWoundCare />} />
      <Route path="/diabetic-foot-wound-care/" element={<DiabeticFootWoundCare />} />

      <Route path="/treatment-for-tendon-pain-injuries" element={<TendonPainInjuries />} />
      <Route path="/treatment-for-tendon-pain-injuries/" element={<TendonPainInjuries />} />

      <Route path="/neuropathy-treatment" element={<NeuropathyTreatment />} />
      <Route path="/neuropathy-treatment/" element={<NeuropathyTreatment />} />

      <Route path="/plantar-wart" element={<PlantarWart />} />
      <Route path="/plantar-wart/" element={<PlantarWart />} />

      <Route path="/bunion" element={<Bunion />} />
      <Route path="/bunion/" element={<Bunion />} />

      <Route path="/corns-calluses" element={<CornsCalluses />} />
      <Route path="/corns-calluses/" element={<CornsCalluses />} />

      <Route path="/foot-ulcer" element={<FootUlcer />} />
      <Route path="/foot-ulcer/" element={<FootUlcer />} />

      <Route path="/flat-foot" element={<FlatFoot />} />
      <Route path="/flat-foot/" element={<FlatFoot />} />

      <Route path="/itchy-feet" element={<ItchyFeet />} />
      <Route path="/itchy-feet/" element={<ItchyFeet />} />

      {/* Services */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/" element={<ServicesPage />} />
      <Route path="/treatments-services" element={<TreatmentsServicesPage />} />
      <Route path="/treatments-services/" element={<TreatmentsServicesPage />} />
      <Route path="/services/bs-nail-brace" element={<BSNailBracePage />} />
      <Route path="/services/bs-nail-brace/" element={<BSNailBracePage />} />
      <Route path="/bs-nail-brace" element={<BSNailBracePage />} />
      <Route path="/bs-nail-brace/" element={<BSNailBracePage />} />
      <Route path="/services/medical-nail-care" element={<MedicalNailCarePage />} />
      <Route path="/services/medical-nail-care/" element={<MedicalNailCarePage />} />
      <Route path="/medical-nail-care" element={<MedicalNailCarePage />} />
      <Route path="/medical-nail-care/" element={<MedicalNailCarePage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />

      {/* New Patients */}
      <Route path="/new-patients" element={<NewPatientsPage />} />
      <Route path="/new-patients/" element={<NewPatientsPage />} />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/" element={<ContactPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
