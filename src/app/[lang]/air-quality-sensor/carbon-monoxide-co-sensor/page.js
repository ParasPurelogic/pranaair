import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"
import { getServerTranslation } from "@/i18n/server"

// ✅ SEO Metadata
export async function generateMetadata() {
    const { t } = await getServerTranslation("carbon-monoxide-co-sensor");
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
    const { t } = await getServerTranslation("carbon-monoxide-co-sensor")
    const sensorData = {
        sensorName: t("coSensorHero.title"),
        sensorType: t("coSensorHero.type"),
        pageName: t("coSensorHero.pageName"),

        productImages: {
            main: ["/img/carbon-monoxide.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/carbon-monoxide.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: t("coSensorHero.variants.standard.ppm"),
                price: t("coSensorHero.variants.standard.price"),
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: t("coSensorHero.variants.premium.ppm"),
                price: t("coSensorHero.variants.premium.price"),
                image: "/img/sensor.png",
            },
        },

        description: t("coSensorHero.description"),
        descriptions: t("coSensorHero.descriptions"),

        introduction: {
            title: t("coSensorHero.introduction.title"),
            titleHighlight: t("coSensorHero.introduction.titleHighlight"),
            description: t("coSensorHero.introduction.description"),

            specs: {
                resolution: {
                    label: t("coSensorHero.introduction.specs.resolution.label"),
                    value: t("coSensorHero.introduction.specs.resolution.value"),
                },
                range: {
                    label: t("coSensorHero.introduction.specs.range.label"),
                    value: t("coSensorHero.introduction.specs.range.value"),
                },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: t("coSensorHero.introduction.whyChooseFeatures.0.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.0.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.0.iconAlt"),
                },
                {
                    icon: "/img/durable.webp",
                    title: t("coSensorHero.introduction.whyChooseFeatures.1.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.1.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.1.iconAlt"),
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: t("coSensorHero.introduction.whyChooseFeatures.2.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.2.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.2.iconAlt"),
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: t("coSensorHero.introduction.whyChooseFeatures.3.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.3.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.3.iconAlt"),
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: t("coSensorHero.introduction.whyChooseFeatures.4.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.4.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.4.iconAlt"),
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: t("coSensorHero.introduction.whyChooseFeatures.5.title"),
                    description: t("coSensorHero.introduction.whyChooseFeatures.5.description"),
                    iconAlt: t("coSensorHero.introduction.whyChooseFeatures.5.iconAlt"),
                },
            ],
        },

        calibration: {
            title: t("coSensorHero.calibration.title"),
            description: t("coSensorHero.calibration.description"),
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: t("coSensorHero.calibration.videoAlt"),
        },

        technology: {
            title: t("coSensorHero.technology.title"),
            subtitle: t("coSensorHero.technology.subtitle"),
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: t("coSensorHero.whatIsSection.title"),
            description: t("coSensorHero.whatIsSection.description"),
            image: "/img/carbon-monioxide-source.webp",
            imageAlt: t("coSensorHero.whatIsSection.imageAlt"),
        },

        lightMode: {
            title: t("coSensorHero.lightMode.title"),
            description: t("coSensorHero.lightMode.description"),
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: t("coSensorHero.lightMode.imageAlt"),
        },

        sensorChip: {
            title: t("coSensorHero.sensorChip.title"),
            description: t("coSensorHero.sensorChip.description"),
            image: "/img/sensor-chip.webp",
            imageAlt: t("coSensorHero.sensorChip.imageAlt"),
            buyNowLink: "#",
        },

        applications: {
            title: t("coSensorHero.applications.title"),
            items: [
                {
                    id: 1,
                    image: "/img/Air-Quality-Monitoring-Equipment.webp",
                    title: t("coSensorHero.applications.items.0.title"),
                    alt: t("coSensorHero.applications.items.0.alt"),
                },
                {
                    id: 2,
                    image: "/img/young-pretty-woman-using-mobile-phone-while-sitting-cozy-armchair.jpg",
                    title: t("coSensorHero.applications.items.1.title"),
                    alt: t("coSensorHero.applications.items.1.alt"),
                },
                {
                    id: 3,
                    image: "/img/drone-quad-copter-with-high-resolution-digital-camera-sky-mountain-city.webp",
                    title: t("coSensorHero.applications.items.2.title"),
                    alt: t("coSensorHero.applications.items.2.alt"),
                },
                {
                    id: 4,
                    image: "/img/natural-disaster-concept-with-flood.webp",
                    title: t("coSensorHero.applications.items.3.title"),
                    alt: t("coSensorHero.applications.items.3.alt"),
                },
                {
                    id: 5,
                    image: "/img/assembly-line-production-new-car-automated-welding-car.webp",
                    title: t("coSensorHero.applications.items.4.title"),
                    alt: t("coSensorHero.applications.items.4.alt"),
                },
                {
                    id: 6,
                    image: "/img/smoking-factory-daytime.webp",
                    title: t("coSensorHero.applications.items.5.title"),
                    alt: t("coSensorHero.applications.items.5.alt"),
                },
            ],
        },

        technicalSpecs: {
            title: t("coSensorHero.technicalSpecs.title"),
            variants: {
                variantA: t("coSensorHero.technicalSpecs.variants.variantA"),
                variantB: t("coSensorHero.technicalSpecs.variants.variantB"),
            },
            specs: {
                productName: {
                    label: t("coSensorHero.technicalSpecs.specs.productName.label"),
                    value: t("coSensorHero.technicalSpecs.specs.productName.value"),
                },
                resolution: {
                    label: t("coSensorHero.technicalSpecs.specs.resolution.label"),
                    value: t("coSensorHero.technicalSpecs.specs.resolution.value"),
                },
                responseTime: {
                    label: t("coSensorHero.technicalSpecs.specs.responseTime.label"),
                    value: t("coSensorHero.technicalSpecs.specs.responseTime.value"),
                },
                operatingTemp: {
                    label: t("coSensorHero.technicalSpecs.specs.operatingTemp.label"),
                    value: t("coSensorHero.technicalSpecs.specs.operatingTemp.value"),
                },
                operatingHumidity: {
                    label: t("coSensorHero.technicalSpecs.specs.operatingHumidity.label"),
                    value: t("coSensorHero.technicalSpecs.specs.operatingHumidity.value"),
                },
                measurementRange: {
                    label: t("coSensorHero.technicalSpecs.specs.measurementRange.label"),
                    value: t("coSensorHero.technicalSpecs.specs.measurementRange.value"),
                },
                repeatability: {
                    label: t("coSensorHero.technicalSpecs.specs.repeatability.label"),
                    value: t("coSensorHero.technicalSpecs.specs.repeatability.value"),
                },
                sensitivity: {
                    label: t("coSensorHero.technicalSpecs.specs.sensitivity.label"),
                    value: t("coSensorHero.technicalSpecs.specs.sensitivity.value"),
                },
                operatingVoltage: {
                    label: t("coSensorHero.technicalSpecs.specs.operatingVoltage.label"),
                    value: t("coSensorHero.technicalSpecs.specs.operatingVoltage.value"),
                },
                powerConsumption: {
                    label: t("coSensorHero.technicalSpecs.specs.powerConsumption.label"),
                    value: t("coSensorHero.technicalSpecs.specs.powerConsumption.value"),
                },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: t("coSensorHero.gallery.title"),
            titleHighlight: t("coSensorHero.gallery.titleHighlight"),
            description: t("coSensorHero.gallery.description"),
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: t("coSensorHero.contact.title"),
            description: t("coSensorHero.contact.description"),
        },

        relatedProducts: {
            title: t("coSensorHero.relatedProducts.title"),
            items: [
                {
                    id: 1,
                    name: t("coSensorHero.relatedProducts.items.0.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.0.alt"),
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: t("coSensorHero.relatedProducts.items.1.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.1.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: t("coSensorHero.relatedProducts.items.2.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.2.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 4,
                    name: t("coSensorHero.relatedProducts.items.3.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.3.alt"),
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: t("coSensorHero.relatedProducts.items.4.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.4.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 6,
                    name: t("coSensorHero.relatedProducts.items.5.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.5.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 7,
                    name: t("coSensorHero.relatedProducts.items.6.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("coSensorHero.relatedProducts.items.6.alt"),
                    link: "/sensors/co",
                },
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
