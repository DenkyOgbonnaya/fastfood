/*import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

let wrapper;

describe('Conter component', () => {
    it('Should render a div', ()=> {
        wrapper = mount(Counter)

        expect(wrapper.html()).toContain('div')
    })
    it('it counter should equal 0', () => {
        wrapper = mount(Counter)
        expect(wrapper.vm.counter).toBe(0)
    })
    it('should increment counter by 1 on btn click', () => {
        wrapper = mount(Counter)
        const btn = wrapper.find('button')

        btn.trigger('click')

        expect(wrapper.vm.counter).toBe(1)
    })
    it('should call the increment method', () => {
        wrapper = mount(Counter)

        wrapper.vm.$emit('increment')

        expect(wrapper.vm.counter).toBe(1)
        //expect(wrapper.emitted().increment).toBeTruthy()
    })
})
*/
