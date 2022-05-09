// Kasten by Veeam k10 UI CN Language Pack
// first version 

window.addEventListener('load',walk(document.body));
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		walk(document.body);
	});    
});
 
// Notify me of everything!
var observerConfig = {
	attributes: true, 
	childList: true, 
	characterData: true 
};
 
// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);


function walk(node) 
{
	var ignore = { "STYLE":0, "SCRIPT":0, "NOSCRIPT":0, "IFRAME":0, "OBJECT":0 }
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }

	if (node.tagName in ignore) return;
	
	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{

	var v = textNode.nodeValue;

// the dictionar as following.

	v = v.replace(/\bPolicies are used to automate your data management workflows\b/igm, "策略是用于自动执行数据管理的工作流");
	v = v.replace(/\bTo achieve this\b/igm, "为达成此目的");
	v = v.replace(/\bthey combine actions you want to take\b/igm, "应用将合成数据管理动作");
	v = v.replace(/\e.g., snapshot\b/igm, "如快照备份");
	v = v.replace(/\ba frequency or schedule for how often you want to take that action\b/igm, "您可以定义周期性地运行这些动作");
	v = v.replace(/\band a label-based selection criteria for the resources you want to manage\b/igm, "并按标签管理资源");
	v = v.replace(/\bNo policies have been created yet\b/igm, "当前没有建立策略");
	v = v.replace(/\bNo Policies\b/igm, "没有策略");
	v = v.replace(/\bNo Actions have executed yet\b/igm, "当前没有动作被执行");
	v = v.replace(/\bThey will appear here\b/igm, "执行时将会显示在此处");
	v = v.replace(/\bView details or perform actions on applications\b/igm, "查看详细信息或执行对应用程序操作");
	v = v.replace(/\bCreate profiles that define cloud credentials and bucket \b/igm, "创建存储库配置，定义凭证和存储桶信息");
	v = v.replace(/\needed to move data in and out of the cluster\b/igm, "用于将集群应用数据导入或导出");
	v = v.replace(/\You'll select from these profiles\b/igm, "您将选择这些云存储库配置");
	v = v.replace(/\Manage configuration profiles for platforms such as\b/igm, "管理基础架构配置文件用于");
	v = v.replace(/\when creating policies or exporting a restore point\b/igm, "在建立策略与导出还原点时使用");
	v = v.replace(/\bReport generation is disabled. No new reports will be created\b/igm, "报告生成已禁用将没有报告被建立");
	v = v.replace(/\bSee the Cluster Status Page for health status of K10 services\b/igm, "有关 K10 服务的运行状况，请参阅群集状态页。");
	v = v.replace(/\bNo data to report yet. Are backups to object storage enabled?\b/igm, "尚无要报告的数据。是否启用了对象存储备份？");
	v = v.replace(/\bShow permissions and other details about the current user\b/igm, "显示有关当前用户的权限和其他详细信息。");
	v = v.replace(/\bRestore a protected object to a previous state\b/igm, "恢复被保护的应用有到之前的状态");
	v = v.replace(/\bCreate profiles\b/igm, "建立存储库配置信息");
	v = v.replace(/\bthat define cloud credentials and bucket locations\b/igm, "定义云凭据与存储桶位置");
	v = v.replace(/\bneeded to move data in and out of the cluster\b/igm, "依据您需要移动数据进出集群的设定");
	v = v.replace(/\bYou'll select from these profiles\b/igm, "您将选择这些配置文件");
	v = v.replace(/\bwhen creating policies or exporting a restore point\b/igm, "用于建立配置或导出还原点");
	v = v.replace(/\bK10 Disaster Recover creates a policy\b/igm, "容灾建立策略");
	v = v.replace(/\bthat snapshots K10 data stores and exports to cloud storage\b/igm, "这将对 K10 数据存储进行快照后导出到云存储");
	v = v.replace(/\busing settings defined in the provided location profile\b/igm, "依照您定义的存储库配置");
	v = v.replace(/\bAlso\b/igm, "而且");
	v = v.replace(/\bK10 DR requires a user-provided passphrase for encryption\b/igm, "需要用户提供口令时行加密");
	v = v.replace(/\bThis passphrase has not yet been created\b/igm, "这个口令还没有建立");
	v = v.replace(/\bYou will be prompted to create one while K10 DR is being enabled \b/igm, "您将被提示创建一个口令用于 K10 DR 的启用");
	v = v.replace(/\bRestore points are shown and ordered based on scheduled execution time\b/igm, "还原点将按照计划执行的时间排序");
	v = v.replace(/\bwhich may be different from the actual creation time\b/igm, "这也许与实际建立时间所有不同");
	v = v.replace(/\bDuring a restore\b/igm, "在还原过程中");
	v = v.replace(/\bthe existing application is deleted and then recreated\b/igm, "现有应用将被删除后重新建立");
	v = v.replace(/\bwith the data artifacts restored from backups\b/igm, "依照现有的备份数据");
	v = v.replace(/\bThese include non-namespaced resources that are not captured in application snapshots\b/igm, "其中包括未在应用程序快照中捕获的非命名空间资源");
	v = v.replace(/\bsuch as Custom Resource Definitions, ClusterRoles, and ClusterRoleBindings\b/igm, "例如自定义资源定义、ClusterRoles 和 ClusterRoleBindings");
	v = v.replace(/\bOptional blueprint actions to be run before or after snapshots complete\b/igm, "在快照完成之前或之后运行的可选蓝图操作");
	v = v.replace(/\bis useful in environments where applications are in a broken state\b/igm, "当应用在一个不正常的状态时很有用");
	v = v.replace(/\bChoose which application namespaces this policy should target\b/igm, "选择策略目标的命名空间");
	v = v.replace(/\bIf the applications being snapshotted use Kanister Blueprints\b/igm, "如果应有在快照操作中使用蓝图");
	v = v.replace(/\bThe action that should be taken when this policy is executed\b/igm, "在策略被生效时动作将执行");
	v = v.replace(/\bThe bucket listed above must already exist and it must have object locking enabled\b/igm, "以上存储桶必须存储并打开对象锁");
	v = v.replace(/\byou may need to specify a cloud location for exported data\b/igm, "您需要指定存储库配置来导出数据");
	v = v.replace(/\bbut the policy actions should continue best-effort\b/igm, "但政策行动应继续达到最大成效");
	v = v.replace(/\bIgnore Exceptions and Continue if Possible\b/igm, "忽略以外继续执行");
	v = v.replace(/\bSelect applications by name or by label.\b/igm, "按名称或标签选择应用");
	v = v.replace(/\bLocation Profile for Kanister Actions\b/igm, "Kanister 操作的存储库配置");
	v = v.replace(/\bPre and Post-Snapshot Action Hooks\b/igm, "快照前后的钩子程序");
	v = v.replace(/\bSnapshot Cluster-Scoped Resources\b/igm, "集群资源快照");
	v = v.replace(/\bThe display name for this policy\b/igm, "策略显示的名称");
	v = v.replace(/\bShow Advanced Frequency Options\b/igm, "显示高级频率选项");
	v = v.replace(/\bWhile taking snapshots\b/igm, "当拍快照时");
	v = v.replace(/\bNo infrastructure profiles have been created yet\b/igm, "尚未创建任何基础结构配置文件");
	v = v.replace(/\bA step-by-step guided tour around the dashboard\b/igm, "仪表板周围的分步导览。");
	v = v.replace(/\bNo reports have been generated for this cluster\b/igm, "在此集群上没有报告被生成");
	v = v.replace(/\bAssign existing roles to users and groups\b/igm, "分配已有角色到用户和组");
	v = v.replace(/\bLight mode in the day. Dark mode at night\b/igm, "白天的照明模式。夜间的黑暗模式。");
	v = v.replace(/\bCreate your own dashboards using Grafana\b/igm, "用 Grafana 建立您的仪表盘");
	v = v.replace(/\bHighest number of node(s) seen per month\b/igm, "每月观察到的最大节点数");
	v = v.replace(/\bSee Documentation for Cluster Dashboard\b/igm, "查看关于集群仪表盘文档");
	v = v.replace(/\bSettings for infrastructure platforms\b/igm, "设置基础架构平台选项");
	v = v.replace(/\bTotal capacity of volumes in cluster\b/igm, "集群中数据卷总容量");
	v = v.replace(/\bNo profiles have been created yet\b/igm, "当前没有建立配置文件 ");
	v = v.replace(/\bData used by application backups\b/igm, "应用程序备份使用的数据");
	v = v.replace(/\bSearch the K10 Knowledge Base.\b/igm, "查找 K10 知识库");
	v = v.replace(/\bTurn on auto-generated reports.\b/igm, "打开自动生成报告");
	v = v.replace(/\bManage cloud location settings\b/igm, "管理云存储库设置");
	v = v.replace(/\bUnable to load timeseries data\b/igm, "无法加载时间序列数据");
	v = v.replace(/\bEnable backup recovery of K10\b/igm, "启用K10 灾难恢复");
	v = v.replace(/\bLight Dark mode, Guided Tour.\b/igm, "明暗模式，向导设置");
	v = v.replace(/\bManage User Access Privileges\b/igm, "管理用户访问权限");
	v = v.replace(/\bObject Storage by Application\b/igm, "按应用程序划分的对象存储");
	v = v.replace(/\bStart Dashboard Guided Tour\b/igm, "开始仪表板导览");
	v = v.replace(/\bLight background, dark text\b/igm, "浅色背景，深色文本。");
	v = v.replace(/\bRead the K10 Documentation\b/igm, "阅读 K10 文档");
	v = v.replace(/\bView Current User Details\b/igm, "查看当前用户详情");
	v = v.replace(/\bActions will appear here\b/igm, "动作将在此显示");
	v = v.replace(/\bCreate your first policy\b/igm, "建立您的第一个策略");
	v = v.replace(/\bApplication Name\b/igm, "应用名称");
	v = v.replace(/\bSelect a namespace to restore into\b/igm, "选择命名空间进行还原");
	v = v.replace(/\bThe contents of the selected namespace will be overwritten with the restored application\b/igm, "所选命名空间的内容将被还原的应用程序覆盖。");
	v = v.replace(/\bCreate a New Namespace\b/igm, "建立新的命名空间");
	v = v.replace(/\bRestore only the volume data and exclude other artifacts such as config files\b/igm, "仅恢复卷数据，并排除其他项目，如配置文件。");
	v = v.replace(/\bOptional Restore Settings\b/igm, "还原选项");
	v = v.replace(/\bOptional blueprint actions to be run before or after restores complete\b/igm, "在还原完成之前或之后运行的可选蓝图操作");
	v = v.replace(/\bPre and Post-Restore Action Hooks\b/igm, "还原动作前后的钩子程序");
	v = v.replace(/\bBefore\b/igm, "之前");
	v = v.replace(/\bAfter\b/igm, "之后");
	v = v.replace(/\bOn Failure\b/igm, "失败");
	v = v.replace(/\b On Success\b/igm, "成功");
	v = v.replace(/\bData-Only Restore\b/igm, "只恢复数据");
	v = v.replace(/\bDon't wait for workloads to be ready\b/igm, "不等待工作负载准备完成");
	v = v.replace(/\bApply transforms to restored resources\b/igm, "将转换应用于还原的资源");
	v = v.replace(/\bSpecifies whether the restore action should skip waiting for all workloads\b/igm, "指定还原操作是否应跳过等待所有工作负载");
	v = v.replace(/\bto be ready before completing\b/igm, "在完成之前做好准备");
	v = v.replace(/\bBy default\b/igm, "默认情况");
	v = v.replace(/\ball artifacts in the restore point will be restored. \b/igm, "将还原还原点中的所有项目");
	v = v.replace(/\bHowever\b/igm, "然而");
	v = v.replace(/\byou can deselect artifacts to exclude them from the restore\b/igm, "您可以取消选择项目以将其从还原中排除");
	v = v.replace(/\bchange the contents of spec resources\b/igm, "更改 Spec 资源的内容");
	v = v.replace(/\bThis may be useful when migrating between environments\b/igm, "这在环境之间迁移时可能很有用");
	v = v.replace(/\bOn restore\b/igm, "在还原时");
	v = v.replace(/\byou can change storage classes or edit container image names\b/igm, "您可以更改存储类或编辑容器映像名称");
	v = v.replace(/\b For example\b/igm, "举例说明 ");
	v = v.replace(/\bProfile Name\b/igm, "配置文件名称");
	v = v.replace(/\bCloud Storage Provider\b/igm, "云存储提供商");
	v = v.replace(/\bUnsecured Connection\b/igm, "不安全的链接");
	v = v.replace(/\bThis connection is not secure\b/igm, "这个连接是不安全的");
	v = v.replace(/\bConsider using an https connection\b/igm, "考虑使用Https链接");
	v = v.replace(/\bif possible\b/igm, "如可能");
	v = v.replace(/\bSkip certificate chain and hostname verification\b/igm, "跳过认证链与主机名");
	v = v.replace(/\bThe geography in which the bucket is located\b/igm, "存储桶位置信息");
	v = v.replace(/\bIf the bucket exists\b/igm, "如果存储存在");
	v = v.replace(/\bensure the region matches the bucket\b/igm, "确保区域信息与存储库一致");
	v = v.replace(/\bEnable Immutable\b/igm, "不可变");
	v = v.replace(/\bMore about Locked Bucket Setup\b/igm, "了解更多关于存储桶不可变功能");
	v = v.replace(/\bDiscovered in this system\b/igm, "已经在系统中发现的");
	v = v.replace(/\bNot Protected by Policies\b/igm, "没有被策略保护 ");
	v = v.replace(/\bView K10 product licenses\b/igm, "查看 K10 产品许可");
	v = v.replace(/\bCluster and contact info\b/igm, "集群与联系信息");
	v = v.replace(/\bCluster-Scoped Resources\b/igm, "集群范围资源");
	v = v.replace(/\bInfrastructure Profiles\b/igm, "基础架构配置信息");
	v = v.replace(/\bMore Charts and Alerts\b/igm, "更多图表和警报");
	v = v.replace(/\bTotal Snapshot Storage\b/igm, "快照存储总量");
	v = v.replace(/\bK10 Disaster Recovery\b/igm, "K10 灾难恢复设置");
	v = v.replace(/\bK10 Disaster Recovery\b/igm, "K10 灾难恢复");
	v = v.replace(/\bCLUSTER ROLE BINDING\b/igm, "集群角色绑定");
	v = v.replace(/\bTotal Object Storage\b/igm, "对象存储总量");
	v = v.replace(/\bCluster Information\b/igm, "集群信息");
	v = v.replace(/\bCurrent K10 Version\b/igm, "当前 K10版本");
	v = v.replace(/\bCreate New Policy\b/igm, "建立新策略");
	v = v.replace(/\bDashboard Settings\b/igm, "仪表盘设置");
	v = v.replace(/\bKubernetes Version\b/igm, "Kubernetes 版本");
	v = v.replace(/\bIgnoring exceptions\b/igm, "忽略错误");
	v = v.replace(/\bSelect Applications\b/igm, "选择应用");
	v = v.replace(/\bAfter - On Success\b/igm, "在成功之后");
	v = v.replace(/\bAfter - On Failure\b/igm, "在失败之后");
	v = v.replace(/\bAdvanced Settings\b/igm, "高级选项");
	v = v.replace(/\bBackup Frequency\b/igm, "备份频率");
	v = v.replace(/\bversus retrying\b/igm, "如重试");
	v = v.replace(/\bCreate Policy\b/igm, "建立策略");
	v = v.replace(/\bNew Policy\b/igm, "新策略");
	v = v.replace(/\bOn Demand\b/igm, "按需");
	v = v.replace(/\bBy Labels\b/igm, "按标签");
	v = v.replace(/\bLatest K10 Version\b/igm, "最新的 K 10 版本");
	v = v.replace(/\bManaging resources\b/igm, "管理中的资源 ");
	v = v.replace(/\bcompleted actions\b/igm, "已完成的动作");
	v = v.replace(/\bLocation Profiles\b/igm, "存储库配置信息");
	v = v.replace(/\bretired artifacts\b/igm, "退役的工件");
	v = v.replace(/\bTotal Backup Data\b/igm, "备份数据总量");
	v = v.replace(/\bAction Durations\b/igm, "动作时长");
	v = v.replace(/\bContact Support\b/igm, "联系支持");
	v = v.replace(/\bCreate a Profile\b/igm, "建立一个配置 文件");
	v = v.replace(/\bFilter by Status\b/igm, "按状态过滤");
	v = v.replace(/\bRole Assignments\b/igm, "角色分配");
	v = v.replace(/\bSnapshot Storage\b/igm, "快照存储 ");
	v = v.replace(/\bKnowledge Base\b/igm, "知识库");
	v = v.replace(/\bActionsDuration\b/igm, "动作时长");
	v = v.replace(/\bBackup Policies\b/igm, "备份策略");
	v = v.replace(/\bCatalog Storage\b/igm, "服务目录存储 ");
	v = v.replace(/\bCreate a Policy\b/igm, "建立一个策略");
	v = v.replace(/\bImport Policies\b/igm, "导入 策略");
	v = v.replace(/\bskipped actions\b/igm, "越过的动作");
	v = v.replace(/\bUsage & Reports\b/igm, "使用资源与报告");
	v = v.replace(/\bDocumentation\b/igm, "文档");
	v = v.replace(/\bCluster Status\b/igm, "集群状态");
	v = v.replace(/\bEnable Reports\b/igm, "启用报告");
	v = v.replace(/\bfailed actions\b/igm, "失败的动作");
	v = v.replace(/\bInfrastructure\b/igm, "基础架构");
	v = v.replace(/\blive artifacts\b/igm, "活动的工件");
	v = v.replace(/\bNew Assignment\b/igm, "新的角色分配");
	v = v.replace(/\bObject Storage\b/igm, "对象存储 ");
	v = v.replace(/\bObject Storage\b/igm, "对象存储 ");
	v = v.replace(/\bTotal Capacity\b/igm, "总容量");
	v = v.replace(/\bUpgrade Status\b/igm, "升级状态");
	v = v.replace(/\bDownload Logs\b/igm, "下载日志");
	v = v.replace(/\bEnable K10 DR\b/igm, "启用 K10 DR");
	v = v.replace(/\bK10 Namespace\b/igm, "K10 命名空间");
	v = v.replace(/\bNon-Compliant\b/igm, "非合规");
	v = v.replace(/\btotal actions\b/igm, "动作总数");
	v = v.replace(/\bUpgrade Steps\b/igm, "升级步骤");
	v = v.replace(/\bUsage History\b/igm, "使用历史");
	v = v.replace(/\bAdd License\b/igm, "增加许可证");
	v = v.replace(/\bNew Profile\b/igm, "新的配置文件");
	v = v.replace(/\bApplications\b/igm, "应用");
	v = v.replace(/\bavg duration\b/igm, "平均时长");
	v = v.replace(/\bCLUSTER ROLE\b/igm, "集群角色");
	v = v.replace(/\bGetting Help\b/igm, "获取帮助");
	v = v.replace(/\bLICENSE TYPE\b/igm, "许可类型");
	v = v.replace(/\bLive Storage\b/igm, "活动的存储 ");
	v = v.replace(/\bNo snapshots\b/igm, "没有快照");
	v = v.replace(/\bROLE BINDING\b/igm, "角色绑定");
	v = v.replace(/\bUser Details\b/igm, "用户详情");
	v = v.replace(/\b free space\b/igm, "用可空间");
	v = v.replace(/\bGood night!\b/igm, "晚安");
	v = v.replace(/\bGuided Tour\b/igm, "导览");
	v = v.replace(/\bK10 Version\b/igm, "K10 版本");
	v = v.replace(/\bNo Profiles\b/igm, "没有配置文件");
	v = v.replace(/\bSnapshots\b/igm, "快照 ");
	v = v.replace(/\bAppearance\b/igm, "外观");
	v = v.replace(/\bCluster ID\b/igm, "集群 ID");
	v = v.replace(/\bData Usage\b/igm, "数据使用情况 ");
	v = v.replace(/\bNo Actions\b/igm, "没有动作");
	v = v.replace(/\bNo Reports\b/igm, "没有报告");
	v = v.replace(/\bNODE LIMIT\b/igm, "节点数限制");
	v = v.replace(/\bUser Roles\b/igm, "用户角色");
	v = v.replace(/\bcompleted\b/igm, "已完成");
	v = v.replace(/\bCompliant\b/igm, "合规");
	v = v.replace(/\bDashboard\b/igm, "仪表盘");
	v = v.replace(/\bSnapshots\b/igm, "快照");
	v = v.replace(/\bUnmanaged\b/igm, "未被管理");
	v = v.replace(/\bActivity\b/igm, "活动");
	v = v.replace(/\bLicenses\b/igm, "许可证");
	v = v.replace(/\blogical\b/igm, "逻辑");
	v = v.replace(/\bPolicies\b/igm, "策略");
	v = v.replace(/\bSettings\b/igm, "设置");
	v = v.replace(/\bsnapshot\b/igm, "快照");
	v = v.replace(/\bActions\b/igm, "动作");
	v = v.replace(/\bBACKUPS\b/igm, "备份");
	v = v.replace(/\bdetails\b/igm, "详情");
	v = v.replace(/\bEXPIRES\b/igm, "过期时间");
	v = v.replace(/\bLICENSE\b/igm, "许可证");
	v = v.replace(/\bNo Data\b/igm, "无数据信息");
	v = v.replace(/\bReports\b/igm, "报告 ");
	v = v.replace(/\brestore\b/igm, "恢复");
	v = v.replace(/\brunning\b/igm, "正在运行");
	v = v.replace(/\bSupport\b/igm, "支持");
	v = v.replace(/\bVolumes\b/igm, "数据卷");
	v = v.replace(/\bdelete\b/igm, "删除");
	v = v.replace(/\bexport\b/igm, "导出");
	v = v.replace(/\bfailed\b/igm, "失败");
	v = v.replace(/\bFilter\b/igm, "过虑器");
	v = v.replace(/\bremove\b/igm, "移除");
	v = v.replace(/\bSTATUS\b/igm, "状态");
	v = v.replace(/\bLogs\b/igm, "日志");
	v = v.replace(/\bLight\b/igm, "浅色");
	v = v.replace(/\bmonth\b/igm, "月");
	v = v.replace(/\bNODES\b/igm, "节点数");
	v = v.replace(/\bVALID\b/igm, "有效");
	v = v.replace(/\bAuto\b/igm, "自动");
	v = v.replace(/\bDark\b/igm, "深色");
	v = v.replace(/\bdays\b/igm, "天");
	v = v.replace(/\bDocs\b/igm, "文档");
	v = v.replace(/\bedit\b/igm, "编辑");
	v = v.replace(/\bhour\b/igm, "小时");
	v = v.replace(/\bPage\b/igm, "页");
	v = v.replace(/\bweek\b/igm, "星期");
	v = v.replace(/\bday\b/igm, "天");
	v = v.replace(/\bsec\b/igm, "秒");
	v = v.replace(/\bStart\b/igm, "开始");
	v = v.replace(/\bEnd\b/igm, "结束");
	v = v.replace(/\bDuration\b/igm, "时长");
	v = v.replace(/\bSuccessful\b/igm, "成功");
	v = v.replace(/\bSuccessfully\b/igm, "成功");
	v = v.replace(/\bshow\b/igm, "显示");
	v = v.replace(/\bPolicy Run\b/igm, "策略运行");
	v = v.replace(/\bLocations\b/igm, "存储库位置");
	v = v.replace(/\bCreate Policy\b/igm, "建立策略");
	v = v.replace(/\bNew Policy\b/igm, "新策略");
	v = v.replace(/\bOn Demand\b/igm, "按需");
	v = v.replace(/\bBy Labels\b/igm, "按标签");
	v = v.replace(/\bComments\b/igm, "注释");
	v = v.replace(/\bSnapshot\b/igm, "快照");
	v = v.replace(/\bfailing\b/igm, "失败");
	v = v.replace(/\bMonthly\b/igm, "月份");
	v = v.replace(/\bBy Name\b/igm, "按名称");
	v = v.replace(/\bAction\b/igm, "动作");
	v = v.replace(/\bImport\b/igm, "导入");
	v = v.replace(/\bHourly\b/igm, "小时");
	v = v.replace(/\bWeekly\b/igm, "星期");
	v = v.replace(/\bYearly\b/igm, "年");
	v = v.replace(/\bBefore\b/igm, "之前");
	v = v.replace(/\bCancel\b/igm, "取消");
	v = v.replace(/\bDaily\b/igm, "天");
	v = v.replace(/\bName\b/igm, "名称");
	v = v.replace(/\bNone\b/igm, "不涉及");
	v = v.replace(/\bBackup\b/igm, "备份");
	v = v.replace(/\bThe most recent reports that have been generated for this cluster\b/igm, "最新的报告已经在此集群上生成");
	v = v.replace(/\bpause\b/igm, "暂停");
	v = v.replace(/\brun once\b/igm, "运行一次");
	v = v.replace(/\bUse the location profile\b/igm, "使用存储配置文件");
	v = v.replace(/\bfor exporting data\b/igm, "导出数据");
	v = v.replace(/\bPolicy\b/igm, "策略");
	v = v.replace(/\bapplication\b/igm, "应用");
	v = v.replace(/\bCluster\b/igm, "集群");
	v = v.replace(/\bType\b/igm, "类型");
	v = v.replace(/\bPoint\b/igm, "点");
	v = v.replace(/\bSCHEDULED TIME\b/igm, "计划时间");
	v = v.replace(/\bCREATION TIME\b/igm, "建立时间");
	v = v.replace(/\bORIGINATING POLICY\b/igm, "发起策略");
	v = v.replace(/\bCOMMAND\b/igm, "命令");
	v = v.replace(/\bcopy\b/igm, "复制");



//console.log(v)

	textNode.nodeValue = v;
}


