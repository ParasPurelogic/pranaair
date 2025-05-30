import "./style.css"
import { getServerTranslation } from "@/i18n/server"

export default async function ReturnPolicyPage() {
    const { t } = await getServerTranslation("return-policy")
    return (
        <main>
            <section className="return-policy-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy-content">
                                <h2>{t("returnPolicy.mainTitle")}</h2>

                                <div className="policy-section mb-4">
                                    <h2>{t("returnPolicy.returnSection.title")}</h2>
                                    <p>{t("returnPolicy.returnSection.paragraph1")}</p>
                                    <p>{t("returnPolicy.returnSection.paragraph2")}</p>
                                </div>

                                <div className="policy-section mb-4">
                                    <h2>{t("returnPolicy.refundSection.title")}</h2>
                                    <p>{t("returnPolicy.refundSection.paragraph")}</p>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.whatToProvide.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.whatToProvide.answer")}</p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.howToClaim.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.howToClaim.answer")}</p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.proofMaterials.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.proofMaterials.answer")}</p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.everyoneRefund.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.everyoneRefund.answer")}</p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.refundTiming.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.refundTiming.answer")}</p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <p className="note">
                                        <strong>{t("returnPolicy.returnNote.label")}</strong> {t("returnPolicy.returnNote.content")}
                                    </p>

                                    <div className="company-address mt-3">
                                        <p>
                                            <strong>{t("returnPolicy.companyAddress.name")}</strong>
                                            <br />
                                            {t("returnPolicy.companyAddress.address")}
                                        </p>
                                    </div>
                                </div>

                                <div className="policy-section mb-4">
                                    <div className="policy-qa">
                                        <p className="question">
                                            <strong>{t("returnPolicy.qa.replacement.question")}</strong>
                                        </p>
                                        <p className="answer">{t("returnPolicy.qa.replacement.answer")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
