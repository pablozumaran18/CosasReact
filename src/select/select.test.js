import Select from "./select";
import renderer from "react-test-renderer"

it("Deberia renderizar correctamente",()=>{
    const componente = renderer.create(<Select></Select>)
    expect(componente).toBeTruthy()
})