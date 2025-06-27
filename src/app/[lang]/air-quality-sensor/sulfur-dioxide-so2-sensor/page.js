import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
    const { t } = await getServerTranslation("sulfur-dioxide-so2-sensor");
    const title = t("meta.title");
    const description = t("meta.description");
    const image = t("meta.image") || "https://www.pranaair.com/images/air-drone.jpg";
    const url = `https://www.pranaair.com/air-drone`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                en: "https://www.pranaair.com/air-drone",
                hi: "https://www.pranaair.com/hi/air-drone",
            }
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Prana Air",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: "Air Drone - Prana Air"
                }
            ]
        }
    };
}
export default async function NO2SensorPage() {
    const { t } = await getServerTranslation("sulfur-dioxide-so2-sensor")
    const sensorData = {
        sensorName: t("pmSensorHero.title"),
        sensorType: t("pmSensorHero.type"),
        pageName: t("pmSensorHero.pageName"),

        productImages: {
            main: ["/img/so2-sensors.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/so2-sensors.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: t("pmSensorHero.variants.standard.ppm"),
                price: t("pmSensorHero.variants.standard.price"),
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: t("pmSensorHero.variants.premium.ppm"),
                price: t("pmSensorHero.variants.premium.price"),
                image: "/img/sensor.png",
            },
        },

        description: t("pmSensorHero.description"),
        descriptions: t("pmSensorHero.descriptions"),

        introduction: {
            title: t("pmSensorHero.introduction.title"),
            titleHighlight: t("pmSensorHero.introduction.titleHighlight"),
            description: t("pmSensorHero.introduction.description"),

            specs: {
                resolution: {
                    label: t("pmSensorHero.introduction.specs.resolution.label"),
                    value: t("pmSensorHero.introduction.specs.resolution.value"),
                },
                range: {
                    label: t("pmSensorHero.introduction.specs.range.label"),
                    value: t("pmSensorHero.introduction.specs.range.value"),
                },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.0.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.0.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.0.iconAlt"),
                },
                {
                    icon: "/img/durable.webp",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.1.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.1.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.1.iconAlt"),
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.2.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.2.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.2.iconAlt"),
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.3.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.3.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.3.iconAlt"),
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.4.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.4.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.4.iconAlt"),
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: t("pmSensorHero.introduction.whyChooseFeatures.5.title"),
                    description: t("pmSensorHero.introduction.whyChooseFeatures.5.description"),
                    iconAlt: t("pmSensorHero.introduction.whyChooseFeatures.5.iconAlt"),
                },
            ],
        },

        calibration: {
            title: t("pmSensorHero.calibration.title"),
            description: t("pmSensorHero.calibration.description"),
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: t("pmSensorHero.calibration.videoAlt"),
        },

        technology: {
            title: t("pmSensorHero.technology.title"),
            subtitle: t("pmSensorHero.technology.subtitle"),
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: t("pmSensorHero.whatIsSection.title"),
            description: t("pmSensorHero.whatIsSection.description"),
            image: "/img/chlorine source.webp",
            imageAlt: t("pmSensorHero.whatIsSection.imageAlt"),
        },

        lightMode: {
            title: t("pmSensorHero.lightMode.title"),
            description: t("pmSensorHero.lightMode.description"),
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: t("pmSensorHero.lightMode.imageAlt"),
        },

        sensorChip: {
            title: t("pmSensorHero.sensorChip.title"),
            description: t("pmSensorHero.sensorChip.description"),
            image: "/img/sensor-chip.webp",
            imageAlt: t("pmSensorHero.sensorChip.imageAlt"),
            buyNowLink: "#",
        },

        applications: {
            title: t("pmSensorHero.applications.title"),
            items: [
                {
                    id: 1,
                    image: "/img/Air-Quality-Monitoring-Equipment.webp",
                    title: t("pmSensorHero.applications.items.0.title"),
                    alt: t("pmSensorHero.applications.items.0.alt"),
                },
                {
                    id: 2,
                    image: "/img/industrial-safety-equipment.webp",
                    title: t("pmSensorHero.applications.items.1.title"),
                    alt: t("pmSensorHero.applications.items.1.alt"),
                },
                {
                    id: 3,
                    image: "/img/automobile-equipment.webp",
                    title: t("pmSensorHero.applications.items.2.title"),
                    alt: t("pmSensorHero.applications.items.2.alt"),
                },
                {
                    id: 4,
                    image: "/img/regulatory-at-power-plants-oil-refineries.webp",
                    title: t("pmSensorHero.applications.items.3.title"),
                    alt: t("pmSensorHero.applications.items.3.alt"),
                },
            ],
        },

        technicalSpecs: {
            title: t("pmSensorHero.technicalSpecs.title"),
            variants: {
                variantA: t("pmSensorHero.technicalSpecs.variants.variantA"),
                variantB: t("pmSensorHero.technicalSpecs.variants.variantB"),
            },
            specs: {
                productName: {
                    label: t("pmSensorHero.technicalSpecs.specs.productName.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.productName.value"),
                },
                resolution: {
                    label: t("pmSensorHero.technicalSpecs.specs.resolution.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.resolution.value"),
                },
                responseTime: {
                    label: t("pmSensorHero.technicalSpecs.specs.responseTime.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.responseTime.value"),
                },
                operatingTemp: {
                    label: t("pmSensorHero.technicalSpecs.specs.operatingTemp.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.operatingTemp.value"),
                },
                operatingHumidity: {
                    label: t("pmSensorHero.technicalSpecs.specs.operatingHumidity.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.operatingHumidity.value"),
                },
                measurementRange: {
                    label: t("pmSensorHero.technicalSpecs.specs.measurementRange.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.measurementRange.value"),
                },
                repeatability: {
                    label: t("pmSensorHero.technicalSpecs.specs.repeatability.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.repeatability.value"),
                },
                sensitivity: {
                    label: t("pmSensorHero.technicalSpecs.specs.sensitivity.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.sensitivity.value"),
                },
                operatingVoltage: {
                    label: t("pmSensorHero.technicalSpecs.specs.operatingVoltage.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.operatingVoltage.value"),
                },
                powerConsumption: {
                    label: t("pmSensorHero.technicalSpecs.specs.powerConsumption.label"),
                    value: t("pmSensorHero.technicalSpecs.specs.powerConsumption.value"),
                },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: t("pmSensorHero.gallery.title"),
            titleHighlight: t("pmSensorHero.gallery.titleHighlight"),
            description: t("pmSensorHero.gallery.description"),
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: t("pmSensorHero.contact.title"),
            description: t("pmSensorHero.contact.description"),
        },

        relatedProducts: {
            title: t("pmSensorHero.relatedProducts.title"),
            items: [
                {
                    id: 1,
                    name: t("pmSensorHero.relatedProducts.items.0.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.0.alt"),
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: t("pmSensorHero.relatedProducts.items.1.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.1.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: t("pmSensorHero.relatedProducts.items.2.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.2.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 4,
                    name: t("pmSensorHero.relatedProducts.items.3.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.3.alt"),
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: t("pmSensorHero.relatedProducts.items.4.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.4.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 6,
                    name: t("pmSensorHero.relatedProducts.items.5.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.5.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 7,
                    name: t("pmSensorHero.relatedProducts.items.6.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("pmSensorHero.relatedProducts.items.6.alt"),
                    link: "/sensors/co",
                },
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
