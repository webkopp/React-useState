const Faq = ({ faqMode, setFaqMode }) => {

    const checkNo = faqMode ? "Why ist React great?" : "Fast Learning Curve"
    const checkYes = faqMode ? 'checkYes' : 'checkNo'

    return (
        <>
            <div>
            <h3>Why ist React great? {faqMode.checkNo}</h3>
            <form>
                <input
                    type="checkbox"
                    id="faqi"
                    value={faqMode.checkYes}
                    onChange={(event) => setFaqMode({ ...faqMode, checkYes: event.target.checked })}
                    />
            </form>
            </div>

            <div>
                <h3>Fast Learning Curve. {faqMode.checkYes ? "😄" : "😔"}</h3>
            </div>
        </>
    )
}

export default Faq;