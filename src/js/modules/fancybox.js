export default function fancybox() {
    try {
        Fancybox.bind("[data-fancybox]", {
            groupAttr: false,
        });
    } catch {}
}