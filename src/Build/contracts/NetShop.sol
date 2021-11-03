pragma solidity 0.8.9;


contract NetShop{
    struct Owner{
        address owner;
        uint256 getPrice;
        uint gettime; 
    }
    struct Net {
        // 序号id
        uint id;
        // 名字
        string name;
        // 图片的URL
        string imgurl;
        address owner;
        // 是否进行售卖
        bool onsale;
        // 起始价格
        uint startprice;
        // 出价历史与出家价格
        address bidderhistory;
        uint256 bidpricehistory;
        // 结束时间
        uint endtime;
        
    }
    // 用来存储Net
    Net[] public nets;
    Net[] public result;
    Owner[] public temp;
    address public gameOwner;
    mapping(uint => Owner[])ownerhistory;
    constructor()public {
        gameOwner = msg.sender;
    }
    // 创建Net
    function createNewCharacter(string memory _name,string memory _imgurl) payable public {
        require(msg.value == 0.1 ether);
        uint id = nets.length;
        delete temp;
        temp.push(Owner(msg.sender,0,block.timestamp));
        ownerhistory[id] = temp;
        uint temp2 = 0;
        address temp3;
        nets.push(Net({id:id,name:_name,imgurl:_imgurl,owner:msg.sender,onsale:false,startprice:0,bidderhistory:temp3,bidpricehistory:temp2,endtime:block.timestamp}));
    }
        function getAllCharacter() public returns(Net[] memory)
    {
        delete result;
        for(uint i=0;i<nets.length;i++)
        {
            result.push(nets[i]);
        }
        return result;
    }
       function getCharacter(address _sender) public returns(Net[] memory){
        delete result;
        for (uint i = 0; i < nets.length; i++) {
            if(nets[i].owner==_sender){
                result.push(nets[i]);
            }
        }
        return result;
    }
    // 获取当前进入售卖的Net
    function getAuction() public returns(Net[] memory){
        delete result;
        for (uint256 i = 0; i < nets.length; i++) {
            if(nets[i].onsale==true){
                result.push(nets[i]);
            }
        }
        return result;
    }
    // 获取当前自己进行拍卖的Net
    function getMyAuction() public returns(Net[] memory){
        delete result;
        for (uint256 i = 0; i < nets.length; i++) {
            if(nets[i].onsale==true&&msg.sender==nets[i].owner){
                result.push(nets[i]);
            }
        }
        return result;
    }
    // 创建Net的onsale
    function createNewAuction(uint _id,uint _sec,uint256 _startprice) payable public{
        require(msg.value == 0.1 ether);
        // uint money=1*10/100;
        // payable(gameOwner).transfer(10/100);
        require(msg.sender==nets[_id].owner);
        require(nets[_id].onsale==false);
        nets[_id].onsale=true;
        nets[_id].endtime=block.timestamp+_sec;
        nets[_id].startprice=_startprice;
        nets[_id].bidderhistory = msg.sender;
        nets[_id].bidpricehistory = _startprice;
    }
    function bid(uint256 _id)payable public{
        require(msg.sender !=nets[_id].owner);
        require(block.timestamp<=nets[_id].endtime);
        require(nets[_id].onsale=true);
        require(nets[_id].bidpricehistory<=msg.value);
            payable(nets[_id].bidderhistory).transfer(nets[_id].bidpricehistory);
            nets[_id].bidderhistory = msg.sender;
            nets[_id].bidpricehistory = msg.value;
    }
    // 获取Owner的流转历史
    function getOwner_history(uint256 _id)public view returns(Owner[] memory){
        return ownerhistory[_id];
    }
    function change_Owner (uint256 _id) public
    {
        require(msg.sender == nets[_id].bidderhistory);
        require(block.timestamp >= nets[_id].endtime);
        payable(nets[_id].owner).transfer(nets[_id].bidpricehistory);
        ownerhistory[_id].push(Owner(msg.sender,nets[_id].bidpricehistory,nets[_id].endtime));
        nets[_id].onsale = false;
        nets[_id].owner = msg.sender;
        nets[_id].startprice = 0;
        nets[_id].bidderhistory = address(0);
        nets[_id].bidpricehistory = 0;
    }
    // 所有者变更所有权
}