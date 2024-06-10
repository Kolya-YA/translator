const Translations = ({ answer }) => {
    
    console.log('Answer', answer)


    return (
        <div>
            <h2 className="text- placeholder:xl font-semibold my-4">Translations: </h2>
            <ul>
                {answer && answer?.tr.map((v, index) => (
                    <li key={index}> — {v.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Translations