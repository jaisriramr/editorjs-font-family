import { API, InlineTool } from "@editorjs/editorjs";

/**
 * Custom font family inline tool
 */
class FontFamily implements InlineTool {
  /**
   * Css class of custom font family inline tool
   */
  public static readonly CSS_CLASS = "FontFamily";

  /**
   * Api  of custom font family inline tool
   */
  public readonly api: API;

  public state: boolean;

  /**
   * Font family of custom font family inline tool
   */
  private font_Family: any = "";

  /**
   * Creates an instance of custom font family inline tool.
   * @param { api, state }
   */
  constructor({ api, state }: { api: API; state: false }) {
    this.api = api;

    this.state = state;
  }

  /**
   * Gets whether is inline
   */
  public static get isInline() {
    return true;
  }

  /**
   * Gets title
   */
  public static get title() {
    return "Font Family";
  }

  /**
   * Surrounds custom font family inline tool
   * @param range
   * @returns surround
   */
  surround(): void {
    if (this.font_Family.length == 0) {
      return;
    }

    document.execCommand("fontName", false, this.font_Family);
  }

  /**
   * Renders custom font family inline tool
   * @returns render
   */
  public render(): HTMLElement {
    const fontFamily = [
      "Arial",
      "Lato",
      "Helvatica",
      "Roboto",
      "Poppins",
      "Times New Roman",
      "Merriweather",
      "Montserrat",
      "Playfair Display",
      "Raleway",
      "Rubik",
    ];

    const container = document.createElement("div");
    container.classList.add("editorjs-dropdown");
    const btn = document.createElement("button");
    btn.classList.add("editorjs-dropdown-btn");
    btn.classList.add("tools-truncate");
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("editorjs-dropdown-content");

    fontFamily.map((family: any) => {
      const FontFamily = document.createElement("p");
      FontFamily.classList.add("editorjs-fontfamily-p");
      FontFamily.innerText = family;
      FontFamily.style.fontFamily = family;
      FontFamily.onclick = (e: any) => {
        this.font_Family = e.target.innerText;
        btn.innerText = this.font_Family;
        dropdownContent.classList.remove("editorjs-dropdown-content-active");
      };
      dropdownContent.appendChild(FontFamily);
    });

    container.appendChild(btn);
    container.appendChild(dropdownContent);
    btn.innerHTML = "Font family";
    btn.onclick = () =>
      dropdownContent.classList.toggle("editorjs-dropdown-content-active");
    return container;
  }

  static get sanitize() {
    return {
      text: {
        br: true,
      },
      span: {
        style: true,
        class: true,
        id: true,
        "data-tooltip": true,
        "data-user": true,
      },
      mark: {
        id: true,
        class: true,
      },
      font: {
        face: true,
        color: true,
        style: true,
        class: true,
        size: true,
      },
    };
  }

  /**
   * Checks state
   * @param selection
   * @returns true if state
   */
  checkState(): boolean {
    const mark = this.api.selection.findParentTag("mark");

    return (this.state = !!mark);
  }
}

export default FontFamily;
