import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
    const { t } = await getServerTranslation("ozone-sensor");
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
    const { t } = await getServerTranslation("ozone-sensor")
    const sensorData = {
        sensorName: t("o3SensorHero.title"),
        sensorType: t("o3SensorHero.type"),
        pageName: t("o3SensorHero.pageName"),

        productImages: {
            main: ["/img/o3-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/o3-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: t("o3SensorHero.variants.standard.ppm"),
                price: t("o3SensorHero.variants.standard.price"),
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: t("o3SensorHero.variants.premium.ppm"),
                price: t("o3SensorHero.variants.premium.price"),
                image: "/img/sensor.png",
            },
        },

        description: t("o3SensorHero.description"),
        descriptions: t("o3SensorHero.descriptions"),

        introduction: {
            title: t("o3SensorHero.introduction.title"),
            titleHighlight: t("o3SensorHero.introduction.titleHighlight"),
            description: t("o3SensorHero.introduction.description"),

            specs: {
                resolution: {
                    label: t("o3SensorHero.introduction.specs.resolution.label"),
                    value: t("o3SensorHero.introduction.specs.resolution.value"),
                },
                range: {
                    label: t("o3SensorHero.introduction.specs.range.label"),
                    value: t("o3SensorHero.introduction.specs.range.value"),
                },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.0.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.0.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.0.iconAlt"),
                },
                {
                    icon: "/img/durable.webp",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.1.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.1.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.1.iconAlt"),
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.2.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.2.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.2.iconAlt"),
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.3.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.3.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.3.iconAlt"),
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.4.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.4.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.4.iconAlt"),
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: t("o3SensorHero.introduction.whyChooseFeatures.5.title"),
                    description: t("o3SensorHero.introduction.whyChooseFeatures.5.description"),
                    iconAlt: t("o3SensorHero.introduction.whyChooseFeatures.5.iconAlt"),
                },
            ],
        },

        calibration: {
            title: t("o3SensorHero.calibration.title"),
            description: t("o3SensorHero.calibration.description"),
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: t("o3SensorHero.calibration.videoAlt"),
        },

        technology: {
            title: t("o3SensorHero.technology.title"),
            subtitle: t("o3SensorHero.technology.subtitle"),
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: t("o3SensorHero.whatIsSection.title"),
            description: t("o3SensorHero.whatIsSection.description"),
            image: "/img/ozone source.webp",
            imageAlt: t("o3SensorHero.whatIsSection.imageAlt"),
        },

        lightMode: {
            title: t("o3SensorHero.lightMode.title"),
            description: t("o3SensorHero.lightMode.description"),
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: t("o3SensorHero.lightMode.imageAlt"),
        },

        sensorChip: {
            title: t("o3SensorHero.sensorChip.title"),
            description: t("o3SensorHero.sensorChip.description"),
            image: "/img/sensor-chip.webp",
            imageAlt: t("o3SensorHero.sensorChip.imageAlt"),
            buyNowLink: "#",
        },

        applications: {
            title: t("o3SensorHero.applications.title"),
            items: [
                {
                    id: 1,
                    image: "/img/Air-Quality-Monitoring-Equipment.webp",
                    title: t("o3SensorHero.applications.items.0.title"),
                    alt: t("o3SensorHero.applications.items.0.alt"),
                },
                {
                    id: 2,
                    image: "/img/smoking-factory-daytime.webp",
                    title: t("o3SensorHero.applications.items.1.title"),
                    alt: t("o3SensorHero.applications.items.1.alt"),
                },
                {
                    id: 3,
                    image: "/img/researcher-woman-measuring-eco-sapling-while-observing.webp",
                    title: t("o3SensorHero.applications.items.2.title"),
                    alt: t("o3SensorHero.applications.items.2.alt"),
                },
                {
                    id: 4,
                    image: "/img/3d-coronavirus-vaccine.webp",
                    title: t("o3SensorHero.applications.items.3.title"),
                    alt: t("o3SensorHero.applications.items.3.alt"),
                },
                {
                    id: 5,
                    image: "/img/men-lab-doing-experiments-close-up.webp",
                    title: t("o3SensorHero.applications.items.4.title"),
                    alt: t("o3SensorHero.applications.items.4.alt"),
                },
                {
                    id: 6,
                    image: "/img/establishing-shot-active-local-indian-health-clinic-lobby.webp",
                    title: t("o3SensorHero.applications.items.5.title"),
                    alt: t("o3SensorHero.applications.items.5.alt"),
                },
                {
                    id: 7,
                    image: "/img/woman-using-home-technology.webp",
                    title: t("o3SensorHero.applications.items.6.title"),
                    alt: t("o3SensorHero.applications.items.6.alt"),
                },
            ],
        },

        technicalSpecs: {
            title: t("o3SensorHero.technicalSpecs.title"),
            variants: {
                variantA: t("o3SensorHero.technicalSpecs.variants.variantA"),
                variantB: t("o3SensorHero.technicalSpecs.variants.variantB"),
            },
            specs: {
                productName: {
                    label: t("o3SensorHero.technicalSpecs.specs.productName.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.productName.value"),
                },
                resolution: {
                    label: t("o3SensorHero.technicalSpecs.specs.resolution.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.resolution.value"),
                },
                responseTime: {
                    label: t("o3SensorHero.technicalSpecs.specs.responseTime.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.responseTime.value"),
                },
                operatingTemp: {
                    label: t("o3SensorHero.technicalSpecs.specs.operatingTemp.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.operatingTemp.value"),
                },
                operatingHumidity: {
                    label: t("o3SensorHero.technicalSpecs.specs.operatingHumidity.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.operatingHumidity.value"),
                },
                measurementRange: {
                    label: t("o3SensorHero.technicalSpecs.specs.measurementRange.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.measurementRange.value"),
                },
                repeatability: {
                    label: t("o3SensorHero.technicalSpecs.specs.repeatability.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.repeatability.value"),
                },
                sensitivity: {
                    label: t("o3SensorHero.technicalSpecs.specs.sensitivity.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.sensitivity.value"),
                },
                operatingVoltage: {
                    label: t("o3SensorHero.technicalSpecs.specs.operatingVoltage.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.operatingVoltage.value"),
                },
                powerConsumption: {
                    label: t("o3SensorHero.technicalSpecs.specs.powerConsumption.label"),
                    value: t("o3SensorHero.technicalSpecs.specs.powerConsumption.value"),
                },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: t("o3SensorHero.gallery.title"),
            titleHighlight: t("o3SensorHero.gallery.titleHighlight"),
            description: t("o3SensorHero.gallery.description"),
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: t("o3SensorHero.contact.title"),
            description: t("o3SensorHero.contact.description"),
        },

        relatedProducts: {
            title: t("o3SensorHero.relatedProducts.title"),
            items: [
                {
                    id: 1,
                    name: t("o3SensorHero.relatedProducts.items.0.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.0.alt"),
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: t("o3SensorHero.relatedProducts.items.1.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.1.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: t("o3SensorHero.relatedProducts.items.2.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.2.alt"),
                    link: "/sensors/no2",
                },
                {
                    id: 4,
                    name: t("o3SensorHero.relatedProducts.items.3.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.3.alt"),
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: t("o3SensorHero.relatedProducts.items.4.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.4.alt"),
                    link: "/sensors/nh3",
                },
                {
                    id: 6,
                    name: t("o3SensorHero.relatedProducts.items.5.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.5.alt"),
                    link: "/sensors/cl2",
                },
                {
                    id: 7,
                    name: t("o3SensorHero.relatedProducts.items.6.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("o3SensorHero.relatedProducts.items.6.alt"),
                    link: "/sensors/h2s",
                },
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
