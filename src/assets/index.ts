/* eslint-disable @typescript-eslint/no-explicit-any */
import segmentChemical from './images/seg-chemical.webp'
import segmentCosmetics from './images/seg-cosmetics.webp'
import segmentDrinks from './images/seg-drinks.webp'
import segmentEnvironment from './images/seg-environment.webp'
import segmentFarm from './images/seg-farm.webp'
import segmentMining from './images/seg-mining.webp'
import segmentNutrition from './images/seg-nutrition.webp'
import segmentSanitation from './images/seg-sanitation.webp'

import backgroundCompany from './images/bg-company.webp'
import backgroundStart from './images/bg-start.webp'
import backgroundDemonstration from './images/bg-demonstration.webp'
import backgroundModules from './images/bg-modules.webp'
import backgroundSystem from './images/bg-system.webp'
import backgroundTalk from './images/bg-talk.webp'

import iconAgility from './images/icon-agility.webp'
import iconCalculation from './images/icon-calculation.webp'
import iconConnection from './images/icon-connection.webp'
import iconEquipment from './images/icon-equipment.webp'
import iconExport from './images/icon-export.webp'
import iconIso from './images/icon-iso.webp'
import iconFollowUp from './images/icon-followup.webp'
import iconTraceability from './images/icon-traceability.webp'

import illustrationCompany from './images/illus-company.webp'
import illustrationModule from './images/illus-module.webp'
import illustrationSystem from './images/illus-system.webp'

import logoPrimary from './images/logo-primary.webp'
import logoSecondary from './images/logo-secondary.webp'
import logoTertiary from './images/logo-tertiary.webp'

export const images: any = {
  segmentChemical,
  segmentCosmetics,
  segmentDrinks,
  segmentEnvironment,
  segmentFarm,
  segmentMining,
  segmentNutrition,
  segmentSanitation,

  backgroundStart,
  backgroundCompany,
  backgroundDemonstration,
  backgroundModules,
  backgroundSystem,
  backgroundTalk,

  iconAgility,
  iconCalculation,
  iconConnection,
  iconEquipment,
  iconExport,
  iconIso,
  iconFollowUp,
  iconTraceability,

  illustrationCompany,
  illustrationModule,
  illustrationSystem,

  logoPrimary,
  logoSecondary,
  logoTertiary
}

import ptPrivacyPolicy from './docs/pp-pt.pdf'
import enPrivacyPolicy from './docs/pp-en.pdf'
import esPrivacyPolicy from './docs/pp-es.pdf'

export const docs: any = {
  pt: { privacyPolicy: ptPrivacyPolicy },
  en: { privacyPolicy: enPrivacyPolicy },
  es: { privacyPolicy: esPrivacyPolicy }
}

import config from './data/config.json'

export const appConfig: any = config

import pt from './data/pt.json'
import en from './data/en.json'
import es from './data/es.json'

const data: any = { pt, en, es }

export const dataSource: any = (lang: string) => data[lang]
