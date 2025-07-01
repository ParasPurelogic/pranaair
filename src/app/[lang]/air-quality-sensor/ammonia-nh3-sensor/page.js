import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"
import { getServerTranslation } from "@/i18n/server"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
    const lang = params?.lang || "en";
    const slug = "air-quality-monitor"; // page-specific slug
    const { t } = await getServerTranslation("ammonia-sensor");
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
    const { t } = await getServerTranslation("ammonia-sensor")
    const sensorData = {
        sensorName: t("nh3SensorHero.title"),
        sensorType: t("nh3SensorHero.type"),
        pageName: t("nh3SensorHero.pageName"),

        productImages: {
            main: ["/img/ammonia-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/ammonia-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: t("nh3SensorHero.variants.standard.ppm"),
                price: t("nh3SensorHero.variants.standard.price"),
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: t("nh3SensorHero.variants.premium.ppm"),
                price: t("nh3SensorHero.variants.premium.price"),
                image: "/img/sensor.png",
            },
        },

        description: t("nh3SensorHero.description"),
        descriptions: t("nh3SensorHero.descriptions"),

        introduction: {
            title: t("nh3SensorHero.introduction.title"),
            titleHighlight: t("nh3SensorHero.introduction.titleHighlight"),
            description: t("nh3SensorHero.introduction.description"),

            specs: {
                resolution: {
                    label: t("nh3SensorHero.introduction.specs.resolution.label"),
                    value: t("nh3SensorHero.introduction.specs.resolution.value"),
                },
                range: {
                    label: t("nh3SensorHero.introduction.specs.range.label"),
                    value: t("nh3SensorHero.introduction.specs.range.value"),
                },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.0.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.0.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.0.iconAlt"),
                },
                {
                    icon: "/img/durable.webp",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.1.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.1.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.1.iconAlt"),
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.2.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.2.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.2.iconAlt"),
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.3.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.3.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.3.iconAlt"),
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.4.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.4.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.4.iconAlt"),
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: t("nh3SensorHero.introduction.whyChooseFeatures.5.title"),
                    description: t("nh3SensorHero.introduction.whyChooseFeatures.5.description"),
                    iconAlt: t("nh3SensorHero.introduction.whyChooseFeatures.5.iconAlt"),
                },
            ],
        },

        calibration: {
            title: t("nh3SensorHero.calibration.title"),
            description: t("nh3SensorHero.calibration.description"),
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: t("nh3SensorHero.calibration.videoAlt"),
        },

        technology: {
            title: t("nh3SensorHero.technology.title"),
            subtitle: t("nh3SensorHero.technology.subtitle"),
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: t("nh3SensorHero.whatIsSection.title"),
            description: t("nh3SensorHero.whatIsSection.description"),
            image: "/img/ammonia-source.webp",
            imageAlt: t("nh3SensorHero.whatIsSection.imageAlt"),
        },

        lightMode: {
            title: t("nh3SensorHero.lightMode.title"),
            description: t("nh3SensorHero.lightMode.description"),
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: t("nh3SensorHero.lightMode.imageAlt"),
        },

        sensorChip: {
            title: t("nh3SensorHero.sensorChip.title"),
            description: t("nh3SensorHero.sensorChip.description"),
            image: "/img/sensor-chip.webp",
            imageAlt: t("nh3SensorHero.sensorChip.imageAlt"),
            buyNowLink: "#",
        },

        applications: {
            title: t("nh3SensorHero.applications.title"),
            items: [
                {
                    id: 1,
                    image: "/img/aerial-top-view-shot-hong-kong-cityscape.webp",
                    title: t("nh3SensorHero.applications.items.0.title"),
                    alt: t("nh3SensorHero.applications.items.0.alt"),
                },
                {
                    id: 2,
                    image: "/img/young-woman-using-home-technology.webp",
                    title: t("nh3SensorHero.applications.items.1.title"),
                    alt: t("nh3SensorHero.applications.items.1.alt"),
                },
                {
                    id: 3,
                    image: "/img/close-up-heat-pump-outside-home.webp",
                    title: t("nh3SensorHero.applications.items.2.title"),
                    alt: t("nh3SensorHero.applications.items.2.alt"),
                },
                {
                    id: 4,
                    image: "/img/foggy-day-with-smoke-coming-out-chimney.webp",
                    title: t("nh3SensorHero.applications.items.3.title"),
                    alt: t("nh3SensorHero.applications.items.3.alt"),
                },
            ],
        },

        technicalSpecs: {
            title: t("nh3SensorHero.technicalSpecs.title"),
            variants: {
                variantA: t("nh3SensorHero.technicalSpecs.variants.variantA"),
                variantB: t("nh3SensorHero.technicalSpecs.variants.variantB"),
            },
            specs: {
                productName: {
                    label: t("nh3SensorHero.technicalSpecs.specs.productName.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.productName.value"),
                },
                resolution: {
                    label: t("nh3SensorHero.technicalSpecs.specs.resolution.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.resolution.value"),
                },
                responseTime: {
                    label: t("nh3SensorHero.technicalSpecs.specs.responseTime.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.responseTime.value"),
                },
                operatingTemp: {
                    label: t("nh3SensorHero.technicalSpecs.specs.operatingTemp.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.operatingTemp.value"),
                },
                operatingHumidity: {
                    label: t("nh3SensorHero.technicalSpecs.specs.operatingHumidity.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.operatingHumidity.value"),
                },
                measurementRange: {
                    label: t("nh3SensorHero.technicalSpecs.specs.measurementRange.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.measurementRange.value"),
                },
                repeatability: {
                    label: t("nh3SensorHero.technicalSpecs.specs.repeatability.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.repeatability.value"),
                },
                sensitivity: {
                    label: t("nh3SensorHero.technicalSpecs.specs.sensitivity.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.sensitivity.value"),
                },
                operatingVoltage: {
                    label: t("nh3SensorHero.technicalSpecs.specs.operatingVoltage.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.operatingVoltage.value"),
                },
                powerConsumption: {
                    label: t("nh3SensorHero.technicalSpecs.specs.powerConsumption.label"),
                    value: t("nh3SensorHero.technicalSpecs.specs.powerConsumption.value"),
                },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: t("nh3SensorHero.gallery.title"),
            titleHighlight: t("nh3SensorHero.gallery.titleHighlight"),
            description: t("nh3SensorHero.gallery.description"),
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: t("nh3SensorHero.contact.title"),
            description: t("nh3SensorHero.contact.description"),
        },

        relatedProducts: {
            title: t("nh3SensorHero.relatedProducts.title"),
            items: [
                {
                    id: 1,
                    name: t("nh3SensorHero.relatedProducts.items.0.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.0.alt"),
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: t("nh3SensorHero.relatedProducts.items.1.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.1.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: t("nh3SensorHero.relatedProducts.items.2.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.2.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 4,
                    name: t("nh3SensorHero.relatedProducts.items.3.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.3.alt"),
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: t("nh3SensorHero.relatedProducts.items.4.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.4.alt"),
                    link: "/sensors/so2",
                },
                {
                    id: 6,
                    name: t("nh3SensorHero.relatedProducts.items.5.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.5.alt"),
                    link: "/sensors/ozone",
                },
                {
                    id: 7,
                    name: t("nh3SensorHero.relatedProducts.items.6.name"),
                    image: "/img/ethanol-sensor.webp",
                    alt: t("nh3SensorHero.relatedProducts.items.6.alt"),
                    link: "/sensors/co",
                },
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
