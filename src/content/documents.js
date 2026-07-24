/**
 * Centralized document registry for GEC course prospectuses.
 *
 * To update a PDF, simply replace the file in ImageKit using the same filename.
 * No code changes are needed — the new file will be served automatically.
 */
export const documents = {
  bth: {
    title: "Bachelor of Theology Prospectus",
    url: "https://ik.imagekit.io/xdm1pwpls0/pdfs/GEC_BTh_Prospectus.pdf",
  },

  mdiv: {
    title: "Master of Divinity Prospectus",
    url: "https://ik.imagekit.io/xdm1pwpls0/pdfs/GEC_MDiv_Prospectus.pdf",
  },

  mth: {
    title: "Master of Theology Prospectus",
    url: "https://ik.imagekit.io/xdm1pwpls0/pdfs/GEC_MTh_Prospectus.pdf",
  },

  diplomaMusic: {
    title: "Diploma in Music Prospectus",
    url: "https://ik.imagekit.io/xdm1pwpls0/pdfs/GEC_DM_Prospectus.pdf",
  },

  diplomaChurchPlanting: {
    title: "Diploma in Church Planting Prospectus",
    url: null, // Set URL when prospectus is available
  },
}
