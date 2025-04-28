interface TechCardProps {
  label: string
  Icon?: React.ElementType
  iconColor?: string
  src?: string
}

const TechCard = ({ label, Icon, iconColor, src }: TechCardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 30,
        // backgroundColor: "#1b1b1b",
        borderRadius: 10,
        // border: "1px solid #505050",
      }}
    >
      {Icon && <Icon color={iconColor} size={50} />}

      {src && (
        <img
          src={src}
          alt={label}
          style={{
            width: 50,
            height: 50,
          }}
        />
      )}

      <h5 style={{ color: "white" }}>{label}</h5>
    </div>
  )
}

export default TechCard
