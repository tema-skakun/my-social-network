import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status={"cowabunga"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("cowabunga");
    });
    test("after creation span should be displayed", async () => {
        const component = create(<ProfileStatus status={"cowabunga"}/>);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"cowabunga"}/>);
        const root = component.root;
        expect(  () => {
            let input = root.findByType("input");
        } ).toThrow();
    });
    test("after creation span should contains correct status", async () => {
        const component = create(<ProfileStatus status={"cowabunga"}/>);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.children[0]).toBe("cowabunga");
    });
    test("input should be displayed in editMode instance of span", async () => {
        const component = create(<ProfileStatus status={"cowabunga"}/>);
        const root = component.root;
        let span = await root.findByType("span");
        span.props.onDoubleClick();
        let input = await root.findByType("input");
        expect(input.props.value).toBe("cowabunga");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"cowabunga"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})
