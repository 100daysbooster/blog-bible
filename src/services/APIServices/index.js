import Users from './User';
import Ads from './Ad';
import News from './New';
import ContractorTypes from './ContractorType';
import Contractor from './Contractor';
import Webboard from './Webboard';
import Zone from './Zone';
import config from './config';

class APIServices {

    constructor() {
        this.config = config;
        this.users = Users;
        this.ads = Ads;
        this.news = News;
        this.contractorTypes = ContractorTypes;
        this.contractor = Contractor;
        this.webboard = Webboard;
        this.zones = Zone;
    }

}

export default new APIServices();