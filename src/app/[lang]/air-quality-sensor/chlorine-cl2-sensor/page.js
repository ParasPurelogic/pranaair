import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"
import { getServerTranslation } from "@/i18n/server"

import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("chlorine-sensor");
    const title = t("meta.title");
    const description = t("meta.description");
    const image = t("meta.image") || `${domain}/images/${slug}.jpg`;

    const languages = supportedLanguages.reduce((acc, code) => {
        acc[code] = `${domain}/${code}/${slug}`;
        return acc;
    }, {});

    return {
        title,
        description,
        alternates: {
            canonical: `${domain}/${lang}/${slug}`,
            languages,
        },
        openGraph: {
            title,
            description,
            url: `${domain}/${lang}/${slug}`,
            siteName: "Prana Air",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
export default async function NO2SensorPage() {
    const { t } = await getServerTranslation("chlorine-sensor")
    const sensorData = {
        sensorName: t("cl2SensorHero.title"),
        sensorType: t("cl2SensorHero.type"),
        pageName: t("cl2SensorHero.pageName"),

        productImages: {
            main: ["/img/chlorine-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/chlorine-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: t("cl2SensorHero.variants.standard.ppm"),
                price: t("cl2SensorHero.variants.standard.price"),
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: t("cl2SensorHero.variants.premium.ppm"),
                price: t("cl2SensorHero.variants.premium.price"),
                image: "/img/sensor.png",
            },
        },

        description: t("cl2SensorHero.description"),
        descriptions: t("cl2SensorHero.descriptions"),

        introduction: {
            title: t("cl2SensorHero.introduction.title"),
            titleHighlight: t("cl2SensorHero.introduction.titleHighlight"),
            description: t("cl2SensorHero.introduction.description"),

            specs: {
                resolution: {
                    label: t("cl2SensorHero.introduction.specs.resolution.label"),
                    value: t("cl2SensorHero.introduction.specs.resolution.value"),
                },
                range: {
                    label: t("cl2SensorHero.introduction.specs.range.label"),
                    value: t("cl2SensorHero.introduction.specs.range.value"),
                },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.0.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.0.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.0.iconAlt"),
                },
                {
                    icon: "/img/durable.webp",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.1.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.1.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.1.iconAlt"),
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.2.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.2.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.2.iconAlt"),
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.3.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.3.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.3.iconAlt"),
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.4.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.4.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.4.iconAlt"),
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: t("cl2SensorHero.introduction.whyChooseFeatures.5.title"),
                    description: t("cl2SensorHero.introduction.whyChooseFeatures.5.description"),
                    iconAlt: t("cl2SensorHero.introduction.whyChooseFeatures.5.iconAlt"),
                },
            ],
        },

        calibration: {
            title: t("cl2SensorHero.calibration.title"),
            description: t("cl2SensorHero.calibration.description"),
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: t("cl2SensorHero.calibration.videoAlt"),
        },

        technology: {
            title: t("cl2SensorHero.technology.title"),
            subtitle: t("cl2SensorHero.technology.subtitle"),
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: t("cl2SensorHero.whatIsSection.title"),
            description: t("cl2SensorHero.whatIsSection.description"),
            image: "/img/chlorine source.webp",
            imageAlt: t("cl2SensorHero.whatIsSection.imageAlt"),
        },

        lightMode: {
            title: t("cl2SensorHero.lightMode.title"),
            description: t("cl2SensorHero.lightMode.description"),
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: t("cl2SensorHero.lightMode.imageAlt"),
        },

        sensorChip: {
            title: t("cl2SensorHero.sensorChip.title"),
            description: t("cl2SensorHero.sensorChip.description"),
            image: "/img/sensor-chip.webp",
            imageAlt: t("cl2SensorHero.sensorChip.imageAlt"),
            buyNowLink: "#",
        },

        applications: {
            title: t("cl2SensorHero.applications.title"),
            items: [
                {
                    id: 1,
                    image: "/img/view-toilet-bathroom.webp",
                    title: t("cl2SensorHero.applications.items.0.title"),
                    alt: t("cl2SensorHero.applications.items.0.alt"),
                },
                {
                    id: 2,
                    image: "/img/technologist-expert-production-line.webp",
                    title: t("cl2SensorHero.applications.items.1.title"),
                    alt: t("cl2SensorHero.applications.items.1.alt"),
                },
                {
                    id: 3,
                    image: "/img/production-medical-mask-development-machine.webp",
                    title: t("cl2SensorHero.applications.items.2.title"),
                    alt: t("cl2SensorHero.applications.items.2.alt"),
                },
                {
                    id: 4,
                    image: "/img/aerial-view-water-treatment-factory-city-wastewater-cleaning.webp",
                    title: t("cl2SensorHero.applications.items.3.title"),
                    alt: t("cl2SensorHero.applications.items.3.alt"),
                },
            ],
        },

        technicalSpecs: {
            title: t("cl2SensorHero.technicalSpecs.title"),
            variants: {
                variantA: t("cl2SensorHero.technicalSpecs.variants.variantA"),
                variantB: t("cl2SensorHero.technicalSpecs.variants.variantB"),
            },
            specs: {
                productName: {
                    label: t("cl2SensorHero.technicalSpecs.specs.productName.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.productName.value"),
                },
                resolution: {
                    label: t("cl2SensorHero.technicalSpecs.specs.resolution.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.resolution.value"),
                },
                responseTime: {
                    label: t("cl2SensorHero.technicalSpecs.specs.responseTime.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.responseTime.value"),
                },
                operatingTemp: {
                    label: t("cl2SensorHero.technicalSpecs.specs.operatingTemp.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.operatingTemp.value"),
                },
                operatingHumidity: {
                    label: t("cl2SensorHero.technicalSpecs.specs.operatingHumidity.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.operatingHumidity.value"),
                },
                measurementRange: {
                    label: t("cl2SensorHero.technicalSpecs.specs.measurementRange.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.measurementRange.value"),
                },
                repeatability: {
                    label: t("cl2SensorHero.technicalSpecs.specs.repeatability.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.repeatability.value"),
                },
                sensitivity: {
                    label: t("cl2SensorHero.technicalSpecs.specs.sensitivity.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.sensitivity.value"),
                },
                operatingVoltage: {
                    label: t("cl2SensorHero.technicalSpecs.specs.operatingVoltage.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.operatingVoltage.value"),
                },
                powerConsumption: {
                    label: t("cl2SensorHero.technicalSpecs.specs.powerConsumption.label"),
                    value: t("cl2SensorHero.technicalSpecs.specs.powerConsumption.value"),
                },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: t("cl2SensorHero.gallery.title"),
            titleHighlight: t("cl2SensorHero.gallery.titleHighlight"),
            description: t("cl2SensorHero.gallery.description"),
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: t("cl2SensorHero.contact.title"),
            description: t("cl2SensorHero.contact.description"),
        },

        relatedProducts: {
            title: t("cl2SensorHero.relatedProducts.title"),
            items: [
                {
                    id: 1,
                    name: t("cl2SensorHero.relatedProducts.items.0.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.0.alt"),
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: t("cl2SensorHero.relatedProducts.items.1.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.1.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: t("cl2SensorHero.relatedProducts.items.2.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.2.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 4,
                    name: t("cl2SensorHero.relatedProducts.items.3.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.3.alt"),
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: t("cl2SensorHero.relatedProducts.items.4.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.4.alt"),
                    link: "/sensors/nh3",
                },
                {
                    id: 6,
                    name: t("cl2SensorHero.relatedProducts.items.5.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.5.alt"),
                    link: "/sensors/h2s",
                },
                {
                    id: 7,
                    name: t("cl2SensorHero.relatedProducts.items.6.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("cl2SensorHero.relatedProducts.items.6.alt"),
                    link: "/sensors/voc",
                },
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
