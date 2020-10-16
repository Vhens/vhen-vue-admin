/*
 * @Author: Vhen
 * @Date: 2020-10-16 10:32:57
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-16 10:37:26
 * @Description:
 */
const i18n ={}
i18n.generateTitle = (title) => {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}

export default i18n
