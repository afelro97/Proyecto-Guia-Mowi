import wkhtmltopdf from 'wkhtmltopdf';
import path from 'path';


const saveToPDF = async(template,saveTo,params,callback) => {
  wkhtmltopdf(template,{
    output: saveTo,
    encoding:'UTF-8',
    //'footer-font-size':params['footer-font-size'] || 7,
    //'footer-right':params['footer-right'] || 'Página [page] de [topage]',
    //'margin-bottom':'30mm',
    'footer-html':`http://192.168.1.3/generate/footer`
  }, (err, eer)=>{
    console.log('err');
      console.log(err);
      console.log('eer');
        console.log(eer);
    callback(err, eer);
  });
}

export {
  saveToPDF
}
