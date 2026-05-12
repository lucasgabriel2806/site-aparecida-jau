const Heading = ({
  children,
  size = "36px",
  color = "#034389",
  weight = "700",
  level = 1
}) => {

  const Tag = `h${level}`

  return (

    <Tag
      style={{
        fontSize: size,
        color,
        fontWeight: weight
      }}
    >

      {children}
      
    </Tag>

  )

}

export default Heading;