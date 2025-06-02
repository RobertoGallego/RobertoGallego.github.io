import JournalCard from "./JournalCard"
import Tech from "../../assets/tech.jpg"
import {
  Noop,
  Klarys,
  Tecnostrike,
  FranceFlag,
  Ausflag,
  ChileFlag,
  Switzerlandflag,
} from "../../assets"
import { useTranslation } from "react-i18next"

const Journal = () => {
  const { t } = useTranslation()

  return (
    <div style={{ width: "100%", marginTop: 100, paddingInline: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <h1>{t("Works.Title")}</h1>
        <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5 }}>
          {t("Works.Description")}
        </p>
      </div>

      <JournalCard
        srcImage={Klarys}
        title={t("Works.Klarys.Title")}
        subtitle={t("Works.Klarys.Description")}
        date={"2021 - 2024"}
        chip={"React"}
        flags={[
          { src: FranceFlag, label: "Rennes, France" },
          { src: Switzerlandflag, label: "Lausanne, Switzerland" },
        ]}
        workPosition={t("Works.Klarys.Role")}
        href="https://www.klarys.io"
      />

      <JournalCard
        srcImage={Noop}
        title={t("Works.Noop.Title")}
        subtitle={t("Works.Noop.Description")}
        date={"2020"}
        chip={"React Native"}
        flags={[{ src: FranceFlag, label: "Rennes, France" }]}
        workPosition={t("Works.Noop.Role")}
        href="https://www.noop.fr"
      />

      <JournalCard
        srcImage={Tech}
        title={t("Works.Taste.Title")}
        subtitle={t("Works.Taste.Description")}
        date={"2015"}
        chip={"Restaurant"}
        flags={[{ src: Ausflag, label: "Sydney, Australia" }]}
        workPosition={t("Works.Taste.Role")}
        href="https://tastebaguette.com/"
      />

      <JournalCard
        srcImage={Tecnostrike}
        title={t("Works.Tecnostrike.Title")}
        subtitle={t("Works.Tecnostrike.Description")}
        date={"2010 - 2014"}
        chip={"IT Support"}
        flags={[{ src: ChileFlag, label: "Santiago, Chile" }]}
        workPosition={t("Works.Tecnostrike.Role")}
        href="https://www.tecnostrike.cl"
      />
    </div>
  )
}

export default Journal
