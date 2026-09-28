import treatmentAndServicesImg from '@/assets/images/treatment and services.jfif'
import bsNailBraceImg from '@/assets/images/BS nail brace.jfif'
import medicalNailCareImg from '@/assets/images/waterless-medical-pedicure-about-img.webp'

export const services = [
  {
    id: 'services',
    slug: 'treatments-services',
    href: '/treatments-services/',
    title: 'Treatments & Services',
    image: treatmentAndServicesImg,
    summary: 'Comprehensive podiatric care, from evaluation through recovery.',
    description:
      'We begin with a careful conversation and evaluation, then explain what we find in plain language. Your treatment plan is tailored to your symptoms, goals, and comfort level.',
    highlights: [
      'A thorough, unrushed evaluation',
      'Options explained clearly',
      'A plan that fits your daily life',
    ],
  },
  {
    id: 'bs-nail-brace',
    slug: 'bs-nail-brace',
    title: 'B/S Nail Brace',
    image: bsNailBraceImg,
    summary: 'A gentle, non-surgical approach for curved or involuted nails.',
    description:
      'We begin with a careful conversation and evaluation, then explain what we find in plain language. Your treatment plan is tailored to your symptoms, goals, and comfort level.',
    highlights: [
      'A thorough, unrushed evaluation',
      'Options explained clearly',
      'A plan that fits your daily life',
    ],
  },
  {
    id: 'medical-nail-care',
    slug: 'medical-nail-care',
    title: 'Medical Nail Care',
    image: medicalNailCareImg,
    summary: 'Expert nail care for comfort, mobility, and peace of mind.',
    description:
      'We begin with a careful conversation and evaluation, then explain what we find in plain language. Your treatment plan is tailored to your symptoms, goals, and comfort level.',
    highlights: [
      'A thorough, unrushed evaluation',
      'Options explained clearly',
      'A plan that fits your daily life',
    ],
  },
]
