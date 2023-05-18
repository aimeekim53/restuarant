

function Page({ title, items }) {
    return (
        <div>
            {title}
            {items.map(({ title, description, image }) => (
                <div key={description}>
                    <div>{title}</div>
                    <div>{description}</div>
                    <img src={image} alt="food" />
                </div>
            ))}
        </div>
    );
}

export default Page;
