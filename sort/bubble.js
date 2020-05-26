/*
 * 冒泡排序算法
 *
 */
function bubble_sort(array, length) {
    var i, j, temp;
    for (i = 0; i < this.length - 1; i++) {
        for (j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
}