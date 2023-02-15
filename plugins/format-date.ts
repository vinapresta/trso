export default defineNuxtPlugin((/* NuxtApp */) => {
  return {
    provide: {
      formatDate: (date: Date, lang: string) => {
        
        const dateObj = new Date(date);

        let dateFormat;

        switch (lang) {

          case 'en':
            dateFormat = dateObj.toLocaleDateString("en-US");
            break;

          default:
            dateFormat = dateObj.toLocaleDateString("en-US");
                    
        }
        
        return dateFormat;

      }
    }
  }
})